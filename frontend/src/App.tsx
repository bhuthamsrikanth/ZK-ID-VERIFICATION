import { useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import { groth16 } from "snarkjs";
import { createWorker } from "tesseract.js";
import {
  CONTRACT_ADDRESS,
  CONTRACT_ABI,
} from "./contract";

function App() {
  const [verificationType, setVerificationType] = useState("");
  const [verificationResult, setVerificationResult] = useState(false);
  const [proofId, setProofId] = useState("");
  const [blockchainVerified, setBlockchainVerified] = useState(false);
  const [privateData, setPrivateData] = useState("");
  const [zkpProof, setZkpProof] = useState<any>(null);
  const [publicSignals, setPublicSignals] = useState<string[]>([]);
  const [isGeneratingProof, setIsGeneratingProof] = useState(false);
 const [documentType, setDocumentType] = useState("");
const [uploadedDocument, setUploadedDocument] = useState<File | null>(null);
const [extractedDob, setExtractedDob] = useState("");
const [documentHash, setDocumentHash] = useState("");
const [isProcessingDocument, setIsProcessingDocument] = useState(false);
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="logo">
          <div className="logo-shield">
            <span>🔒</span>
          </div>

          <div className="logo-text">
            <h2>
              ZK-ID <span>VERIFY</span>
            </h2>
            <p>Privacy. Proof. Trust.</p>
          </div>
        </div>

        <div className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#applications">Applications</a>
          <a href="#technology">Technology</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="demo-btn">Try Demo</button>

      </nav>


      {/* ================= HERO ================= */}
      <section className="hero-section" id="home">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <div className="technology-badge">
            <span>ZERO KNOWLEDGE</span>
            <b>•</b>
            <span>BLOCKCHAIN</span>
            <b>•</b>
            <span>PRIVACY</span>
          </div>

          <h1>
            Privacy-Preserving
            <br />
            Identity Verification
            <br />
            <span>Using ZKP &amp; Blockchain</span>
          </h1>

          <p className="hero-description">
            Prove your identity, age, or credentials without revealing personal
            information. Our ZKP-powered system ensures privacy while leveraging
            the transparency and security of blockchain technology.
          </p>

          <div className="hero-buttons">

            <button
              className="verify-btn"
              onClick={() => {
                window.location.href = "#verify";
              }}
            >
              Verify Now →
            </button>
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="hero-right">

          <div className="network-bg"></div>

          <div className="zkp-flow">

            {/* USER CREDENTIAL */}
            <div className="credential-card">

              <h3>User Credential</h3>

              <div className="credential-content">

                <div className="avatar-box">
                  <div className="avatar-head"></div>
                  <div className="avatar-body"></div>
                </div>

                <div className="user-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>

              <div className="credential-bottom">
                <span className="small-lock">♙</span>
                <span>******</span>
              </div>

            </div>


            {/* CONNECTOR LEFT */}
            <div className="flow-line left-line">
              <span>→</span>
            </div>


            {/* ZKP CENTER */}
            <div className="zkp-center">

              <div className="shield">

                <div className="shield-inner">
                  <span>ZKP</span>
                </div>

              </div>

              <div className="verified-check">
                ✓
              </div>

              <div className="proof-label">
                Zero-Knowledge Proof
              </div>

            </div>


            {/* CONNECTOR RIGHT */}
            <div className="flow-line right-line">
              <span>→</span>
            </div>


            {/* SMART CONTRACT */}
            <div className="contract-card">

              <h3>Blockchain</h3>
              <h3>Smart Contract</h3>

              <div className="contract-document">

                <div className="document-fold"></div>

                <span></span>
                <span></span>
                <span></span>

              </div>

              <div className="contract-verified">
                ✓
              </div>

            </div>

          </div>


          {/* BLOCKCHAIN NODES */}
          <div className="blockchain-nodes">

            <div className="node node-one"></div>
            <div className="node node-two"></div>
            <div className="node node-three"></div>

            <div className="node-line line-one"></div>
            <div className="node-line line-two"></div>

          </div>


          {/* PRIVACY MESSAGE */}
          <div className="privacy-message">

            <div className="privacy-lock">🔒</div>

            <span>
              Your data stays <strong>private.</strong>
              Only the proof is verified <strong>on-chain.</strong>
            </span>

          </div>

        </div>

      </section>


      {/* ================= BENEFITS ================= */}
      <section className="quick-benefits">

        <div className="benefit">
          <span className="benefit-icon">♢</span>
          <span>Privacy First</span>
        </div>

        <div className="benefit-divider"></div>

        <div className="benefit">
          <span className="benefit-icon">⬡</span>
          <span>Decentralized</span>
        </div>

        <div className="benefit-divider"></div>

        <div className="benefit">
          <span className="benefit-icon">🔒</span>
          <span>Tamper Proof</span>
        </div>

        <div className="benefit-divider"></div>

        <div className="benefit">
          <span className="benefit-icon">♢</span>
          <span>Trustless Verification</span>
        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="features" id="features">

        <div className="section-title">

          <h2>
            Powering the Future of <span>Trust</span>
          </h2>

          <p>
            Secure. Private. Decentralized.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon shield-icon">
              ♢
            </div>

            <h3>Zero-Knowledge Proofs</h3>

            <p>
              Prove facts without revealing any underlying data using advanced
              ZKP cryptography.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ⬡
            </div>

            <h3>Blockchain Security</h3>

            <p>
              Immutable and transparent verification using smart contracts on
              the blockchain.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon user-feature-icon">
              ◯
            </div>

            <h3>User Privacy</h3>

            <p>
              Your personal data never leaves your device. Privacy is built
              into the system.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon lightning">
              ⚡
            </div>

            <h3>Instant Verification</h3>

            <p>
              Fast and efficient verification without manual checks or central
              authorities.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ◎
            </div>

            <h3>Decentralized Identity</h3>

            <p>
              Own your identity. No central control. You decide what to prove
              and to whom.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon wide-icon">
              ◐
            </div>

            <h3>Wide Applications</h3>

            <p>
              Age verification, KYC, access control, education, and more use
              cases supported.
            </p>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="stats">

        <div className="stat-item">

          <div className="stat-icon">
            👥
          </div>

          <div>
            <h2>100%</h2>
            <p>Privacy Preserved</p>
          </div>

        </div>


        <div className="stat-divider"></div>


        <div className="stat-item">

          <div className="stat-icon">
            ♢
          </div>

          <div>
            <h2>Tamper Proof</h2>
            <p>Immutable Records</p>
          </div>

        </div>


        <div className="stat-divider"></div>


        <div className="stat-item">

          <div className="stat-icon lightning-stat">
            ⚡
          </div>

          <div>
            <h2>Real-time</h2>
            <p>Verification</p>
          </div>

        </div>


        <div className="stat-divider"></div>


        <div className="stat-item">

          <div className="stat-icon">
            ⬡
          </div>

          <div>
            <h2>Decentralized</h2>
            <p>Trust Network</p>
          </div>

        </div>

      </section>


      {/* EMPTY SECTIONS FOR NAVIGATION */}
     {/* ================= ABOUT ================= */}
<section className="about-section" id="about">

  <div className="about-content">

    <div className="about-left">

      <div className="about-badge">
        ABOUT OUR PLATFORM
      </div>

      <h2>
        Redefining Digital Identity
        <span> with Privacy</span>
      </h2>

      <p>
        ZK-ID Verify is a privacy-preserving identity verification platform
        that combines Zero-Knowledge Proofs and blockchain technology.
      </p>

      <p>
        Users can prove important information about themselves without
        revealing their sensitive personal data.
      </p>

      <div className="about-points">

        <div className="about-point">
          <span>✓</span>
          <p>Your personal data remains private</p>
        </div>

        <div className="about-point">
          <span>✓</span>
          <p>Only cryptographic proof is verified</p>
        </div>

        <div className="about-point">
          <span>✓</span>
          <p>Blockchain provides transparent verification</p>
        </div>

      </div>

    </div>


    <div className="about-right">

      <div className="about-visual">

        <div className="about-shield">
  <div className="css-lock">
    <div className="lock-shackle"></div>
    <div className="lock-body">
      <span></span>
    </div>
  </div>
</div>
        <div className="about-circle circle-one"></div>
        <div className="about-circle circle-two"></div>
        <div className="about-circle circle-three"></div>

        <div className="about-label">
          PRIVATE IDENTITY
        </div>

      </div>

    </div>

  </div>

</section>
      {/* ================= APPLICATIONS ================= */}
<section className="applications" id="applications">

  <div className="section-title">

    <div className="applications-badge">
      REAL-WORLD USE CASES
    </div>

    <h2>
      Built for <span>Everyday Trust</span>
    </h2>

    <p>
      Privacy-preserving verification for the applications that matter most.
    </p>

  </div>


  {/* APPLICATION CARDS */}
  <div className="applications-grid">

    <div className="application-card">
      <div className="application-number">01</div>
      <div className="application-icon">👤</div>

      <h3>Identity Verification</h3>

      <p>
        Verify identity securely without exposing sensitive personal information.
      </p>
    </div>


    <div className="application-card">
      <div className="application-number">02</div>
      <div className="application-icon">🎂</div>

      <h3>Age Verification</h3>

      <p>
        Prove age eligibility without revealing your exact date of birth.
      </p>
    </div>


    <div className="application-card">
      <div className="application-number">03</div>
      <div className="application-icon">🎓</div>

      <h3>Education Credentials</h3>

      <p>
        Verify academic certificates and qualifications securely.
      </p>
    </div>


    <div className="application-card">
      <div className="application-number">04</div>
      <div className="application-icon">🏦</div>

      <h3>Secure KYC</h3>

      <p>
        Complete KYC verification while keeping personal data private.
      </p>
    </div>

  </div>


  {/* VERIFICATION FLOW */}
  <div className="application-flow">

    <div className="flow-step">
      <span className="flow-step-icon">👤</span>

      <div>
        <h4>User</h4>
        <p>Provides credentials</p>
      </div>
    </div>

    <div className="flow-arrow">→</div>


    <div className="flow-step">
      <span className="flow-step-icon">🔐</span>

      <div>
        <h4>ZKP Proof</h4>
        <p>Privacy protected</p>
      </div>
    </div>

    <div className="flow-arrow">→</div>


    <div className="flow-step">
      <span className="flow-step-icon">⬡</span>

      <div>
        <h4>Blockchain</h4>
        <p>Proof recorded</p>
      </div>
    </div>

    <div className="flow-arrow">→</div>


    <div className="flow-step">
      <span className="flow-step-icon">✓</span>

      <div>
        <h4>Verified</h4>
        <p>Trusted result</p>
      </div>
    </div>

  </div>

</section>
{/* ================= TECHNOLOGY ================= */}
<section className="technology" id="technology">

  <div className="technology-header">

    <div className="technology-badge">
      HOW IT WORKS
    </div>

    <h2>
      Technology Built for
      <span> Privacy & Trust</span>
    </h2>

    <p>
      A secure verification process powered by Zero-Knowledge Proofs
      and blockchain technology.
    </p>

  </div>


  <div className="technology-grid">

    <div className="technology-card">

      <div className="technology-step">01</div>

      <div className="technology-icon">👤</div>

      <h3>User Data</h3>

      <p>
        Your personal credentials remain securely under your control.
      </p>

    </div>


    <div className="technology-card">

      <div className="technology-step">02</div>

      <div className="technology-icon">🔐</div>

      <h3>Zero-Knowledge Proof</h3>

      <p>
        A cryptographic proof is generated without revealing your
        private information.
      </p>

    </div>


    <div className="technology-card">

      <div className="technology-step">03</div>

      <div className="technology-icon">⬡</div>

      <h3>Blockchain Verification</h3>

      <p>
        The proof is securely verified through blockchain smart
        contracts.
      </p>

    </div>


    <div className="technology-card">

      <div className="technology-step">04</div>

      <div className="technology-icon">✓</div>

      <h3>Trusted Result</h3>

      <p>
        Verification is completed instantly while your personal data
        stays private.
      </p>

    </div>

  </div>
  {/* TECHNOLOGY FLOW */}
<div className="technology-flow">

  <div className="technology-flow-step">
    <span>01</span>
    <p>User Data</p>
  </div>

  <div className="technology-flow-line"></div>

  <div className="technology-flow-step active-step">
    <span>02</span>
    <p>ZKP Generated</p>
  </div>

  <div className="technology-flow-line"></div>

  <div className="technology-flow-step">
    <span>03</span>
    <p>Blockchain Verified</p>
  </div>

  <div className="technology-flow-line"></div>

  <div className="technology-flow-step">
    <span>04</span>
    <p>Trusted Result</p>
  </div>

</div>

</section>
{/* ================= CONTACT ================= */}
<section className="contact-section" id="contact">

  <div className="contact-header">

    <div className="contact-badge">
      GET IN TOUCH
    </div>

    <h2>
      Let's Build a More <span>Private Future</span>
    </h2>

    <p>
      Have questions about ZKP, blockchain, or our privacy-preserving
      identity verification platform? We'd love to hear from you.
    </p>

  </div>


  <div className="contact-container">

    {/* CONTACT INFORMATION */}
    <div className="contact-info">

      <h3>Get in Touch</h3>

      <p>
        Connect with us to learn more about secure and privacy-preserving
        digital identity verification.
      </p>


      <div className="contact-item">

        <div className="contact-icon">✉</div>

        <div>
          <h4>Email</h4>
          <p>info@zkidverify.com</p>
        </div>

      </div>


      <div className="contact-item">

        <div className="contact-icon">📍</div>

        <div>
          <h4>Location</h4>
          <p>Hyderabad, India</p>
        </div>

      </div>


      <div className="contact-item">

        <div className="contact-icon">🔒</div>

        <div>
          <h4>Privacy First</h4>
          <p>Your information is always protected.</p>
        </div>

      </div>

    </div>


    {/* CONTACT FORM */}
    <div className="contact-form">

      <div className="form-row">

        <div className="form-group">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />
        </div>

      </div>


      <div className="form-group">
        <label>Subject</label>
        <input type="text" placeholder="What is this about?" />
      </div>


      <div className="form-group">
        <label>Message</label>
        <textarea
          rows={5}
          placeholder="Write your message..."
        ></textarea>
      </div>


      <button className="send-message-btn">
        Send Message →
      </button>

    </div>

  </div>

</section>
{/* ================= FOOTER ================= */}




  {/* ================= VERIFICATION ================= */}
<section className="verify-section" id="verify">

  <div className="verify-header">

    <div className="verify-badge">
      SECURE CREDENTIAL VERIFICATION
    </div>

    <h2>
      Prove What You Need
      <span> Without Revealing Everything</span>
    </h2>

    <p>
      Select a verification requirement and generate a privacy-preserving
      proof from your credential. Only the required claim is verified.
    </p>

  </div>


  {/* VERIFICATION OPTIONS */}
  <div className="verify-options">

    {/* AGE */}
    <div className="verify-option">

      <div className="verify-option-icon">
        🔞
      </div>

      <h3>Age Verification</h3>

      <p>
        Prove that you meet an age requirement without revealing your
        exact date of birth.
      </p>

      <button
        className="start-verify-btn"
        onClick={() => setVerificationType("age")}
      >
        Prove Age →
      </button>

    </div>


    {/* STUDENT */}
    <div className="verify-option">

      <div className="verify-option-icon">
        🎓
      </div>

      <h3>Student Verification</h3>

      <p>
        Prove valid student status without exposing unnecessary
        student information.
      </p>

      <button
        className="start-verify-btn"
        onClick={() => setVerificationType("student")}
      >
        Prove Student Status →
      </button>

    </div>


    {/* EDUCATION */}
    <div className="verify-option">

      <div className="verify-option-icon">
        📜
      </div>

      <h3>Education Verification</h3>

      <p>
        Prove that you satisfy an educational qualification without
        revealing the complete credential.
      </p>

      <button
        className="start-verify-btn"
        onClick={() => setVerificationType("education")}
      >
        Prove Qualification →
      </button>

    </div>


    {/* ACCESS */}
    <div className="verify-option">

      <div className="verify-option-icon">
        🔐
      </div>

      <h3>Access Verification</h3>

      <p>
        Prove that you have the required authorization without
        revealing the underlying private credential.
      </p>

      <button
        className="start-verify-btn"
        onClick={() => setVerificationType("access")}
      >
        Prove Access →
      </button>

    </div>


    {/* MEMBERSHIP */}
    <div className="verify-option">

      <div className="verify-option-icon">
        🪪
      </div>

      <h3>Membership Verification</h3>

      <p>
        Prove valid membership while keeping unnecessary membership
        information private.
      </p>

      <button
        className="start-verify-btn"
        onClick={() => setVerificationType("membership")}
      >
        Prove Membership →
      </button>

    </div>


    {/* IDENTITY */}
    <div className="verify-option">

      <div className="verify-option-icon">
        👤
      </div>

      <h3>Identity Verification</h3>

      <p>
        Prove that your identity credential satisfies the required
        verification conditions.
      </p>

      <button
        className="start-verify-btn"
        onClick={() => setVerificationType("identity")}
      >
        Prove Identity →
      </button>

    </div>

  </div>


 {verificationType && (
  <div className="verification-form">
    <div className="verification-workflow">

  <div className="workflow-step active">
    <div className="workflow-number">01</div>
    <div className="workflow-content">
      <strong>Credential</strong>
      <span>Upload Document</span>
    </div>
  </div>

  <div className="workflow-line"></div>

  <div className="workflow-step">
    <div className="workflow-number">02</div>
    <div className="workflow-content">
      <strong>Document Hash</strong>
      <span>Generate SHA-256</span>
    </div>
  </div>

  <div className="workflow-line"></div>

  <div className="workflow-step">
    <div className="workflow-number">03</div>
    <div className="workflow-content">
      <strong>ZKP Proof</strong>
      <span>Generate Proof</span>
    </div>
  </div>

  <div className="workflow-line"></div>

  <div className="workflow-step">
    <div className="workflow-number">04</div>
    <div className="workflow-content">
      <strong>Blockchain</strong>
      <span>Verified</span>
    </div>
  </div>

</div>


      <h3>
        {verificationType === "age" && "Age Verification"}
        {verificationType === "student" && "Student Verification"}
        {verificationType === "education" && "Education Verification"}
        {verificationType === "access" && "Access Verification"}
        {verificationType === "membership" && "Membership Verification"}
        {verificationType === "identity" && "Identity Verification"}
      </h3>


      <p>
        Your credential is used to generate a cryptographic proof.
        Sensitive information is not sent to the blockchain.
      </p>


      {/* AGE MODULE */}
{verificationType === "age" && (
  <>
    <label className="credential-label">
      Select Document Type
    </label>

    <select
      value={documentType}
      onChange={(e) => {
  setDocumentType(e.target.value);
  setUploadedDocument(null);
  setExtractedDob("");
  setDocumentHash("");
  setPrivateData("");
}}
    >
      <option value="">Select a document</option>
      <option value="Aadhaar">Aadhaar Card</option>
      <option value="PAN">PAN Card</option>
      <option value="Voter ID">Voter ID</option>
      <option value="Driving Licence">Driving Licence</option>
    </select>

    <label className="credential-label">
      Upload Document
    </label>

    <input
      type="file"
      accept="image/*"
      onChange={async (e) => {
        const file = e.target.files?.[0];

        if (!file) {
          return;
        }

        if (!documentType) {
          alert("Please select the document type first.");
          e.target.value = "";
          return;
        }

       setUploadedDocument(file);
setExtractedDob("");
setDocumentHash("");
setPrivateData("");
setIsProcessingDocument(true);

try {
  // Generate SHA-256 hash of the uploaded document
  const fileBuffer = await file.arrayBuffer();

  const hashBuffer = await crypto.subtle.digest(
    "SHA-256",
    fileBuffer
  );

  const hashArray = Array.from(
    new Uint8Array(hashBuffer)
  );

  const hashHex = hashArray
    .map((byte) =>
      byte.toString(16).padStart(2, "0")
    )
    .join("");

  setDocumentHash(hashHex);

  console.log("SHA-256 Document Hash:", hashHex);

  const worker = await createWorker("eng");

          const result = await worker.recognize(file);

          const text = result.data.text;

          console.log("OCR Text:", text);

          await worker.terminate();

          /*
           * Look for common date formats:
           * DD/MM/YYYY
           * DD-MM-YYYY
           * DD.MM.YYYY
           * YYYY-MM-DD
           */
          const datePatterns = [
            /\b(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[0-2])[\/\-\.](19|20)\d{2}\b/,
            /\b(19|20)\d{2}[\/\-\.](0?[1-9]|1[0-2])[\/\-\.](0?[1-9]|[12][0-9]|3[01])\b/
          ];

          let foundDate = "";

          for (const pattern of datePatterns) {
            const match = text.match(pattern);

            if (match) {
              foundDate = match[0];
              break;
            }
          }

          if (!foundDate) {
            alert(
              "Date of Birth could not be detected.\n\n" +
              "Please upload a clear document image."
            );
            return;
          }

          let normalizedDate = "";

          if (/^\d{4}[\/\-\.]/.test(foundDate)) {
            const parts = foundDate.split(/[\/\-\.]/);

            const year = parts[0];
            const month = parts[1].padStart(2, "0");
            const day = parts[2].padStart(2, "0");

            normalizedDate = `${year}-${month}-${day}`;
          } else {
            const parts = foundDate.split(/[\/\-\.]/);

            const day = parts[0].padStart(2, "0");
            const month = parts[1].padStart(2, "0");
            const year = parts[2];

            normalizedDate = `${year}-${month}-${day}`;
          }

          setExtractedDob(normalizedDate);
          setPrivateData(normalizedDate);

        } catch (error) {
          console.error("OCR failed:", error);

          alert(
            "Document processing failed.\n\n" +
            "Please upload a clear document image and try again."
          );
        } finally {
          setIsProcessingDocument(false);
        }
      }}
    />

    {uploadedDocument && (
      <p className="privacy-note">
        Selected document: {uploadedDocument.name}
      </p>
    )}

    {isProcessingDocument && (
      <p className="privacy-note">
        Reading document and extracting Date of Birth...
      </p>
    )}

    {extractedDob && (
  <div className="verification-status">
    ✓ Date of Birth Extracted: {extractedDob}
  </div>
)}

{documentHash && (
  <div className="verification-status">
    ✓ SHA-256 Document Hash Generated

    <div
      style={{
        marginTop: "8px",
        fontSize: "12px",
        wordBreak: "break-all",
        opacity: 0.8,
        maxWidth: "700px",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      {documentHash}
    </div>
  </div>
)}

    <p className="privacy-note">
      Your document remains on this device. OCR is used to extract
      your Date of Birth for age verification.
    </p>

    <button
      className="generate-proof-btn"
      onClick={async () => {

        if (!documentType) {
          alert("Please select a document type.");
          return;
        }

        if (!uploadedDocument) {
          alert("Please upload your document.");
          return;
        }

        if (!extractedDob) {
          alert("Please wait until the Date of Birth is extracted.");
          return;
        }

        const birthDate = new Date(extractedDob);
        const today = new Date();

        let age =
          today.getFullYear() -
          birthDate.getFullYear();

        const monthDifference =
          today.getMonth() -
          birthDate.getMonth();

        if (
          monthDifference < 0 ||
          (
            monthDifference === 0 &&
            today.getDate() < birthDate.getDate()
          )
        ) {
          age--;
        }

        if (age < 18) {
          alert(
            "Age requirement not satisfied. You must be 18 or older."
          );
          return;
        }

        setIsGeneratingProof(true);

        try {

         const dob = Number(
  extractedDob.replace(/-/g, "")
);

const secret = Math.floor(
  Math.random() * 1000000000
);

const { proof, publicSignals } =
  await groth16.fullProve(
    {
      dob: dob,
      secret: secret,
      age: age
    },
    "/zkp/AgeVerification.wasm",
    "/zkp/AgeVerification_final.zkey"
  );

          setZkpProof(proof);
          setPublicSignals(publicSignals);

          setProofId(
            "ZKP-" +
            Math.random()
              .toString(36)
              .substring(2, 10)
              .toUpperCase()
          );

          setBlockchainVerified(false);
          setVerificationResult(true);

        } catch (error) {

          console.error(
            "ZKP generation failed:",
            error
          );

          const message =
            error instanceof Error
              ? error.message
              : String(error);

          alert(
            "ZKP Generation Failed:\n\n" +
            message
          );

        } finally {
          setIsGeneratingProof(false);
        }
      }}
    >
      {isGeneratingProof
        ? "Generating ZKP..."
        : "Generate Privacy-Preserving Proof →"}
    </button>
  </>
)}

            {/* STUDENT MODULE */}
      {verificationType === "student" && (

        <>

          <label className="credential-label">
            Student ID
          </label>

          <input
            type="text"
            value={privateData}
            onChange={(e) => setPrivateData(e.target.value)}
            placeholder="Enter your student ID"
          />

          <p className="privacy-note">
            Your student ID remains private. It is used only
            to generate the zero-knowledge proof.
          </p>

          <button
            className="generate-proof-btn"
           onClick={async () => {

                try {
                if (!privateData) {
                  alert("Please enter your student ID.");
                  return;
                }

                const studentId = Number(privateData);

                if (!Number.isInteger(studentId) || studentId <= 0) {
                  alert("Please enter a valid student ID.");
                  return;
                }
             

              const status = 1;

              const { proof, publicSignals } =
                await groth16.fullProve(
                  {
                    studentId,
                    status
                  },
                  "/zkp/StudentVerification.wasm",
                  "/zkp/StudentVerification_final.zkey"
                );

                setZkpProof(proof);
                setPublicSignals(publicSignals);

                setProofId(
                  "STUDENT-" +
                  Math.random()
                    .toString(36)
                    .substring(2, 10)
                    .toUpperCase()
                );

                setBlockchainVerified(false);
                setVerificationResult(true);

              } catch (error) {

                console.error(
                  "Student ZKP generation failed:",
                  error
                );

                const message =
                  error instanceof Error
                    ? error.message
                    : String(error);

                alert(
                  "Student ZKP Generation Failed:\n\n" +
                  message
                );

              } finally {

                setIsGeneratingProof(false);

              }

            }}
          >
            {isGeneratingProof
              ? "Generating ZKP..."
              : "Generate Student Proof →"}
          </button>

        </>

      )}

      {/* OTHER MODULES */}
      {verificationType !== "age" &&
       verificationType !== "student" && (

        <div className="coming-soon-verification">

          <div className="coming-soon-icon">
            🔐
          </div>

          <h4>
            Privacy-Preserving Credential Proof
          </h4>

          <p>
            This verification module uses the same credential →
            ZKP → smart contract architecture. Its dedicated
            proof circuit will be connected next.
          </p>

          <div className="verification-architecture">

            <span>Credential</span>
            <b>→</b>
            <span>ZKP</span>
            <b>→</b>
            <span>Smart Contract</span>
            <b>→</b>
            <span>Result</span>

          </div>

        </div>

      )}
      


      {/* PROOF RESULT */}
      {verificationResult &&
        verificationType === "age" && (

        <div className="verification-success">

          <div className="success-icon">
            ✓
          </div>

          <h3>
            Zero-Knowledge Proof Generated
          </h3>

          <p>
            The required condition was proved without
            revealing the private information.
          </p>


          <div className="verification-status">
            ✓ Proof Generated
          </div>


          <div className="verification-proof-id">

            <span>Verification ID</span>

            <strong>
              {proofId}
            </strong>

          </div>


          <div className="verification-status">
            ✓ Privacy Protected
          </div>


          {!blockchainVerified ? (

            <button
              className="generate-proof-btn"
              onClick={async () => {

                try {

                  if (
                    !zkpProof ||
                    !publicSignals.length
                  ) {

                    alert(
                      "ZKP proof is not available."
                    );

                    return;
                  }


                  const provider =
                    new ethers.JsonRpcProvider(
                      "http://127.0.0.1:8545"
                    );


                  const signer =
                    await provider.getSigner(0);


                  const contract =
                    new ethers.Contract(
                      CONTRACT_ADDRESS,
                      CONTRACT_ABI,
                      signer
                    );


                  const pA = [
                    zkpProof.pi_a[0],
                    zkpProof.pi_a[1]
                  ];


                  const pB = [

                    [
                      zkpProof.pi_b[0][1],
                      zkpProof.pi_b[0][0]
                    ],

                    [
                      zkpProof.pi_b[1][1],
                      zkpProof.pi_b[1][0]
                    ]

                  ];


                  const pC = [
                    zkpProof.pi_c[0],
                    zkpProof.pi_c[1]
                  ];


                  const signals = [
                publicSignals[0],
                publicSignals[1]
              ];


                  const transaction =
                    await contract.verifyAgeProof(
                      proofId,
                      pA,
                      pB,
                      pC,
                      signals
                    );


                  await transaction.wait();


                  const verified =
                    await contract.isVerified(
                      proofId
                    );


                  if (verified) {
                    setBlockchainVerified(true);
                  }


                } catch (error) {

                  console.error(
                    "Blockchain verification failed:",
                    error
                  );


                  const message =
                    error instanceof Error
                      ? error.message
                      : String(error);


                  alert(
                    "Blockchain Error:\n\n" +
                    message
                  );

                }

              }}
            >
              Verify Proof on Blockchain →
            </button>

          ) : (

            <div className="verification-status blockchain-success">
              ✓ Blockchain Verified
            </div>

          )}

        </div>

      )}

    </div>

  )}

</section>


{/* ================= FOOTER ================= */}

<footer className="footer">

  <div className="footer-content">

    {/* BRAND */}
    <div className="footer-brand">

      <div className="footer-logo">
        🔒
        <span>ZK-ID <strong>VERIFY</strong></span>
      </div>

      <p>
        Privacy-preserving identity verification powered by
        Zero-Knowledge Proofs and blockchain technology.
      </p>

    </div>


    {/* QUICK LINKS */}
    <div className="footer-column">

      <h3>Quick Links</h3>

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#features">Features</a>
      <a href="#applications">Applications</a>

    </div>


    {/* TECHNOLOGY */}
    <div className="footer-column">

      <h3>Technology</h3>

      <a href="#technology">Zero-Knowledge Proofs</a>
      <a href="#technology">Blockchain</a>
      <a href="#technology">Smart Contracts</a>
      <a href="#technology">Privacy</a>

    </div>


    {/* CONTACT */}
    <div className="footer-column">

      <h3>Contact</h3>

      <a href="#contact">Get in Touch</a>
      <a href="#contact">Hyderabad, India</a>
      <a href="#contact">info@zkidverify.com</a>

    </div>

  </div>


  <div className="footer-bottom">

    <p>
      © 2026 ZK-ID VERIFY. Built for Privacy, Proof & Trust.
    </p>

    <p>
      🔒 Your identity. Your data. Your control.
    </p>

  </div>

</footer>


    </div>
  )
}

export default App