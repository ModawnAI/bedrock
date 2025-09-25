import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend with API key from environment variables
// Use a placeholder during build time if API key is not available
const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_key_for_build");

// Zod schema for request validation (matching the contact form schema)
const requestDemoSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  companyName: z.string().min(1, "Company Name is required"),
  role: z.string().min(1, "Your Role/Title is required"),
  workEmail: z.string().email("Invalid email address").min(1, "Work Email is required"),
  challenge: z.string().min(10, "Please describe your challenge in at least 10 characters"),
});

type RequestDemoData = z.infer<typeof requestDemoSchema>;

// HTML email template
function createEmailTemplate(data: RequestDemoData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Demo Request - Bedrock Innovations</title>
      <style>
        body {
          font-family: 'Inter', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          padding: 30px 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          background: #ffffff;
          padding: 30px 20px;
          border: 1px solid #e5e7eb;
          border-radius: 0 0 8px 8px;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background: #f9fafb;
          border-radius: 6px;
          border-left: 4px solid #f59e0b;
        }
        .field-label {
          font-weight: 600;
          color: #374151;
          margin-bottom: 5px;
        }
        .field-value {
          color: #6b7280;
        }
        .challenge {
          background: #fef3c7;
          border-left-color: #d97706;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🚀 New Demo Request</h1>
        <p>Someone is interested in a custom AI solution!</p>
      </div>
      
      <div class="content">
        <div class="field">
          <div class="field-label">Full Name</div>
          <div class="field-value">${data.fullName}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Company Name</div>
          <div class="field-value">${data.companyName}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Role/Title</div>
          <div class="field-value">${data.role}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Work Email</div>
          <div class="field-value">
            <a href="mailto:${data.workEmail}" style="color: #f59e0b; text-decoration: none;">
              ${data.workEmail}
            </a>
          </div>
        </div>
        
        <div class="field challenge">
          <div class="field-label">Main Operational Challenge</div>
          <div class="field-value">${data.challenge}</div>
        </div>
        
        <div class="footer">
          <p><strong>Next Steps:</strong></p>
          <p>Respond within one business day to schedule a discovery call.</p>
          <p>This request was submitted through the Bedrock Innovations landing page.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = requestDemoSchema.parse(body);

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set");
      console.error("Available env vars:", Object.keys(process.env).filter(key => key.includes('RESEND')));
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    console.log("Resend API key found:", process.env.RESEND_API_KEY ? "✅ Yes" : "❌ No");

    // Create HTML email content
    const htmlContent = createEmailTemplate(validatedData);

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: "Demo Requests <chris@bedrock-innovations.com>", // Using Chris's email
      to: ["chris@bedrock-innovations.com"], // Chris's email for receiving requests
      subject: `New Demo Request from ${validatedData.fullName} at ${validatedData.companyName}`,
      html: htmlContent,
      replyTo: validatedData.workEmail,
    });

    // Check if email was sent successfully
    if (emailResult.error) {
      console.error("Resend API error:", emailResult.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      { 
        message: "Demo request submitted successfully",
        id: emailResult.data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: "Validation failed",
          details: error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 422 }
      );
    }

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    // Handle other errors
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
