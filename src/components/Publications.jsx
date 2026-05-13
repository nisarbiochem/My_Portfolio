const papers = [
  "1. Vitamin D enhances intestinal stem cells (2024)",
  "2. Engineered dendritic cells for Treg induction (2024)",
  "3. Sodium chlorate toxicity studies (2017–2023)"
]

function Publications() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6">Publications</h2>
      <ul className="list-disc ml-6 text-gray-300">
        {papers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </section>
  )
}

export default Publications