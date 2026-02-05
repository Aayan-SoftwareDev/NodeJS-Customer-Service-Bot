const {Pinecone} = require("@pinecone-database/pinecone");
const dotenv  = require("dotenv");
const {getEmbedding} = require("./getEmbeddings");

dotenv.config();

const pinecone = new Pinecone({apiKey: process.env.PINECONE_API_KEY});
const index = pinecone.index("info-ilmify");

async function findContext(text) {
    const embeddedQuery = await getEmbedding(text);

    const queryResponse = await index.query({
        vector: embeddedQuery,
        topK: 3,
        includeMetadata: true,
    });

    return queryResponse.matches.map(match => match.metadata.text).join("\n\n");
}

module.exports  = {
    findContext,
};