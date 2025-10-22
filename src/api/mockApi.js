// src/api/mockApi.js

const db = {
  questions: [
    {
      id: 1,
      subject: "Ciências da Natureza",
      statement: "Qual das alternativas descreve melhor o processo de fotossíntese?",
      choices: [
        "Respiração celular",
        "Produção de glicose a partir de luz, CO2 e água",
        "Transformação de energia cinética em potencial",
        "Reações de combustão",
        "Mitose"
      ],
      answer: 1,
      resolution: "A fotossíntese é o processo no qual plantas produzem glicose usando luz, CO2 e água."
    },
    {
      id: 2,
      subject: "Ciências da Natureza",
      statement: "Qual a unidade básica dos seres vivos?",
      choices: ["Molécula", "Célula", "Tecidos", "Órgão", "Organismo"],
      answer: 1,
      resolution: "A célula é a unidade básica estrutural e funcional dos seres vivos."
    }
  ],
  ranking: [
    { name: "Desine Oloski", school: "IFRS - Campus Erechim", points: 420 },
    { name: "Thiago Muhlbeier", school: "E.E. Tiradentes", points: 395 },
    { name: "Valéria Lessa", school: "E.P. UPF", points: 360 },
  ]
};

// EXPORTAÇÃO CORRETA
export async function fetchMock(endpoint) {
  return new Promise(resolve => setTimeout(() => resolve(db[endpoint]), 400));
}