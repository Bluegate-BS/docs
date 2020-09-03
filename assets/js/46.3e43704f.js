(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{309:function(e,t,n){"use strict";n.r(t);var s=n(32),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"how-to-integrate-vip-191-iii"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-integrate-vip-191-iii"}},[e._v("#")]),e._v(" How to Integrate VIP-191 (III)")]),e._v(" "),n("p",[e._v("This is the last part of the tutorial.")]),e._v(" "),n("p",[e._v("It mainly explains the sponsor’s initiative to inspect the transaction and sign his signature on it. We will use the express.js library to build a framework to receive transmission and return the result.")]),e._v(" "),n("p",[e._v("Before that, I have a "),n("em",[n("strong",[e._v("hefty wallet")])]),e._v(" on test-net to be a sponsor:")]),e._v(" "),n("blockquote",[n("p",[e._v("Sponsor’s address: 0x126cdb344f476f25b9fb2050513f425a82f71046")]),e._v(" "),n("p",[e._v("Private key: 5df5e7f22a71dfd3d032ff5eb9dfc7dbe9c950e0671745826639a0423cd45d7f")]),e._v(" "),n("p",[e._v("Balance: ["),n("a",{attrs:{href:"https://explore-testnet.vechain.org/accounts/0x126cdb344f476f25b9fb2050513f425a82f71046",target:"_blank",rel:"noopener noreferrer"}},[e._v("LINK"),n("OutboundLink")],1),e._v("] ← Contains >4000 VTHO to be spent.")])]),e._v(" "),n("h3",{attrs:{id:"sponsor-s-server-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sponsor-s-server-code"}},[e._v("#")]),e._v(" Sponsor’s Server Code")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\nconst express = require('express')\nconst cry = require('thor-devkit/dist/cry')\nconst Transaction = require('thor-devkit/dist/transaction').Transaction\n\nconst app = express()\napp.use(express.json())\nconst port = 3000\n\napp.post('/', function(req, res) {\n\n    // Re-construct the transaction from the request.\n    const tx = new Transaction(req.body['txBody'])\n    // Extract 'sender' address from request.\n    const sender = req.body['sender']\n\n    // Compute the sponsor hash.\n    const sponsorHash = tx.signingHash(sender)\n\n    // Sponsor account (with money): \n    // 0x126cdb344f476f25b9fb2050513f425a82f71046\n    const sponsorPriv = Buffer.from(\n        '5df5e7f22a71dfd3d032ff5eb9dfc7dbe9c950e0671745826639a0423cd45d7f',\n        'hex'\n    )\n\n    // Compute the sponsor signature with hash+private key.\n    const signature = cry.secp256k1.sign(sponsorHash, sponsorPriv)\n\n    // Send back the signature.\n    res.send({\n        'sponsor_signature': signature.toString('hex')\n    })\n\n})\n\napp.listen(port, () => console.log(`Example app listening on port ${port}!`))\n")])])]),n("p",[e._v("The above code is quite simple, with some details to pay attention to:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The server is listening on localhost:3000.")])]),e._v(" "),n("li",[n("p",[e._v("The tx is re-constructed from the request, it’s a good time inspecting it.")])]),e._v(" "),n("li",[n("p",[e._v("The sponsor is using his own private key to sign.")])]),e._v(" "),n("li",[n("p",[e._v("The sponsor_signature is returned to the user.")])])]),e._v(" "),n("h3",{attrs:{id:"back-to-the-user-s-side"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#back-to-the-user-s-side"}},[e._v("#")]),e._v(" Back to the User’s side")]),e._v(" "),n("p",[e._v("Finally, on the user’s side, it can assemble the final compound signature and post the transaction to the VeChain network!")]),e._v(" "),n("p",[e._v("Let’s continue where we left off from the "),n("a",{attrs:{href:"https://medium.com/@abyteahead/how-to-integrate-vip-191-ii-1b4e32d7960d",target:"_blank",rel:"noopener noreferrer"}},[e._v("2nd tutorial"),n("OutboundLink")],1),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Fetch the sponsor signature.\nconst sponsorSignature = await getSponosrSignature(\n    '0x'+originAddress.toString('hex'),\n    txBody\n)\n    \n// Compose a combined signature of user + sponsor.\nconst sig = Buffer.concat([\n    originSignature,\n    Buffer.from(sponsorSignature, 'hex')\n])\n\n// Mount on the combined signature.\ntx.signature = sig\n\n// Convert the tx to raw format.\nconst rawTx = '0x' + tx.encode().toString('hex')\n\n// Submit the raw transaction by hand to the test-net.\nconst url = 'https://sync-testnet.vechain.org/transactions'\nfetch(url, {\n    method: 'POST',\n    headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({'raw': rawTx})\n}).then(response => {\n    response.text().then(r => {console.log(r)})\n}).catch(err => {\n    console.log('err', err)\n})\n")])])]),n("p",[e._v("The process is quite straightforward, concatenate of user’s signature originSignature and the sponsor’s signature sponsorSignature . Then finally call the POST method to send to our VeChain test-net.")]),e._v(" "),n("h3",{attrs:{id:"an-example-result"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-example-result"}},[e._v("#")]),e._v(" An Example Result")]),e._v(" "),n("p",[e._v("As of writing, I have successfully posted several transactions and all show details of VIP-191 fee delegation feature, for example, the transaction with below ID:")]),e._v(" "),n("blockquote",[n("p",[e._v("Tx: 0xd8b94a68764f6f49eb33bb7a6e895e0f2565c8c8e1731f1258b188561b581e87 ["),n("a",{attrs:{href:"https://explore-testnet.vechain.org/transactions/0xd8b94a68764f6f49eb33bb7a6e895e0f2565c8c8e1731f1258b188561b581e87#info",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Link"),n("OutboundLink")],1),e._v("]")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/3448/1*UzQOZILPS_Q7fC9whcbPXA.png",alt:"Example of VIP-191 Result"}}),n("em",[e._v("Example of VIP-191 Result")])]),e._v(" "),n("p",[e._v("As we can see from the above picture, the 26.64 VTHO is paid not by the user, but by the sponsor. Hence, the fee delegation is complete.")]),e._v(" "),n("h2",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),n("p",[e._v("Due to the length of the article, this VIP-191 tutorial doesn’t show the full source code from the user’s side and the sponsor’s side. I have included a workable sample of "),n("a",{attrs:{href:"https://gist.github.com/laalaguer/1a7d9f9e0993c83ffcc84b766c3498ae",target:"_blank",rel:"noopener noreferrer"}},[e._v("user.js"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://gist.github.com/laalaguer/cbedc4591a13e5ef6b7e14eb1d1bcaf3",target:"_blank",rel:"noopener noreferrer"}},[e._v("sponsor.js"),n("OutboundLink")],1),e._v(" on the Github for you to run.")]),e._v(" "),n("p",[e._v("I hope you like this trilogy of tutorials on VIP-191 of VeChain. As always, may the force be with you!")])])}),[],!1,null,null,null);t.default=r.exports}}]);