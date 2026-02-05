
<h1>Customer Service RAG Agent</h1>

<div class="section">
  <p>
    The <strong>Customer Service RAG Agent</strong> is an AI-powered customer support system built using a
    Retrieval-Augmented Generation (RAG) architecture.
    It automatically answers customer queries by retrieving relevant context from a vector database and
    generating accurate responses using OpenAI.
  </p>

  <p>
    The backend is powered by <strong>Node.js</strong>, email communication is handled through
    <strong>Brevo API</strong>, contextual data is stored in <strong>Pinecone Vector Database</strong>,
    and intelligent responses are generated via the <strong>OpenAI API</strong>.
  </p>
</div>

<div class="section">
  <h2>Key Features</h2>
  <ul>
    <li>AI-driven customer support using RAG</li>
    <li>Context retrieval from Pinecone Vector Database</li>
    <li>Email sending and replies via Brevo API</li>
    <li>Node.js backend for orchestration</li>
    <li>OpenAI for natural language understanding and response generation</li>
    <li>Scalable architecture for production environments</li>
  </ul>
</div>

<div class="section">
  <h2>Tech Stack</h2>
  <ul>
    <li><strong>Backend:</strong> Node.js</li>
    <li><strong>Email Service:</strong> Brevo API</li>
    <li><strong>Vector Database:</strong> Pinecone</li>
    <li><strong>AI Model:</strong> OpenAI API</li>
    <li><strong>Architecture:</strong> Retrieval-Augmented Generation (RAG)</li>
  </ul>
</div>

<div class="section">
  <h2>How It Works</h2>
  <ul>
    <li>Customer sends an email or query.</li>
    <li>The backend receives the message.</li>
    <li>Relevant documents are retrieved from Pinecone.</li>
    <li>Context + question are sent to OpenAI.</li>
    <li>AI generates a response.</li>
    <li>The reply is sent back to the customer via Brevo.</li>
  </ul>
</div>

<div class="section">
  <h2>Use Cases</h2>
  <ul>
    <li>Automated customer support</li>
    <li>Order inquiries</li>
    <li>FAQ handling</li>
    <li>Product support</li>
    <li>Email-based AI agents</li>
  </ul>
</div>

<div class="section">
  <h2>Environment Variables</h2>
  <ul>
    <li><code>OPENAI_API_KEY</code></li>
    <li><code>PINECONE_API_KEY</code></li>
    <li><code>BREVO_API_KEY</code></li>
    <li><code>PORT</code></li>
  </ul>
</div>

<div class="section">
  <h2>License</h2>
  <p>MIT</p>
</div>
