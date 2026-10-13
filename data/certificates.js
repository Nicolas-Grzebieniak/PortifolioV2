// Carrega sozinho todos os arquivos da pasta assets/certificates.
// Para adicionar um certificado: coloque o arquivo na pasta e escreva o nome dele em fileUrl().
const files = import.meta.glob("../assets/certificates/*", {
  eager: true,
  query: "?url",
  import: "default",
});
const fileUrl = (name) => files[`../assets/certificates/${name}`] ?? "#";

export const certificates = [
  {
    title: "Certificate of Recognition",
    issuer: "PUCPR",
    date: "May 2025",
    url: fileUrl("CertificadoDeReconhecimento.pdf"),
  },
  {
    title: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    date: "May 2025",
    url: fileUrl("ScrumFundamentalsCertified.pdf"),
  },
];
