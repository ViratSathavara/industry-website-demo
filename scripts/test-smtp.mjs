import nodemailer from "nodemailer";

async function testGmail() {
  console.log("Testing Gmail SMTP connection with provided credentials...");
  
  // Test 1: Standard host + port 587
  try {
    const transporter1 = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "viratmsathavara2510@gmail.com",
        pass: "wxewsxcbrhlgioif"
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    await transporter1.verify();
    console.log("✅ Test 1 (Host smtp.gmail.com + Port 587) SUCCESS: Connection verified!");
  } catch (err) {
    console.log("❌ Test 1 failed:", err.message);
  }

  // Test 2: service: "gmail"
  try {
    const transporter2 = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "viratmsathavara2510@gmail.com",
        pass: "wxewsxcbrhlgioif"
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    await transporter2.verify();
    console.log("✅ Test 2 (service: 'gmail') SUCCESS: Connection verified!");
  } catch (err) {
    console.log("❌ Test 2 failed:", err.message);
  }
}

testGmail();
