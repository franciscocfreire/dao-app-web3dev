import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x3dbEADA0E5fc927b4eAb40AeB7F7E596bCD3A7E5", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Heineken",
        description: "Esse NFT vai te dar acesso ao CervejeirosDAO!",
        image: readFileSync("scripts/assets/heineken.png"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()