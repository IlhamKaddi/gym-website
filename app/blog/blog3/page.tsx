import ArticleLayout from "../../compenents/ArticleLayout";

export default function Article() {
  return (
    <ArticleLayout
      title="Comment rester motivé toute l'année"
      image="/rester-motive.jfif"
      category="Mindset"
      date="02 Jan 2026"
    >
      <p>
        La motivation ne suffit pas toujours pour atteindre ses objectifs. La
        discipline et les bonnes habitudes sont essentielles pour rester
        performant tout au long de l année.
      </p>

      <div className="rounded-2xl p-8 my-10">
        <p className="text-[#EB1C22] text-sm uppercase tracking-wider mb-2 font-semibold">
          💡 Astuce
        </p>
        <p className="text-gray-200 text-lg">
          Fixez-vous de petits objectifs réalistes et célébrez chaque
          progression. Cela aide à maintenir votre motivation sur le long terme.
        </p>
      </div>

      <h2>1. 🎯 Définir des objectifs clairs</h2>
      <p>
        Établir des objectifs précis, mesurables et atteignables vous permet de
        savoir exactement ce que vous visez et de rester concentré.
      </p>

      <h2>2. 🗓️ Créer une routine quotidienne</h2>
      <p>
        Une routine structurée réduit la procrastination et facilite la mise en
        action quotidienne, même quand la motivation est faible.
      </p>

      <h2>3. 📌 Suivre ses progrès</h2>
      <p>
        Noter vos accomplissements vous permet de visualiser votre évolution et
        de rester motivé en voyant vos progrès concrets.
      </p>

      <h2>4. 🧠 Cultiver un mindset positif</h2>
      <p>
        Remplacez les pensées négatives par des affirmations positives et
        inspirez-vous de personnes qui ont atteint vos objectifs.
      </p>

      <h2>5. 🔄 Se récompenser</h2>
      <p>
        Récompenser vos efforts crée un système de motivation interne et
        renforce vos habitudes positives.
      </p>

      <blockquote>
        <p className="text-xl text-gray-200 italic">
          La motivation vous fait commencer, mais c’est la discipline qui vous
          fait continuer.
        </p>
        <p className="text-gray-400 mt-2">— Coach en développement personnel</p>
      </blockquote>

      <p className="text-xl mt-12">
        👉 Appliquez ces stratégies chaque jour et transformez votre motivation
        en résultats concrets tout au long de l année.
      </p>

      <div className="mt-12 p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
        <p className="text-gray-400 text-sm">
          <strong>Note :</strong> La motivation fluctue naturellement. Soyez
          patient et persévérez, même dans les moments où l’envie est faible.
        </p>
      </div>
    </ArticleLayout>
  );
}
