import ArticleLayout from "../../compenents/ArticleLayout";

export default function Article() {
  return (
    <ArticleLayout
      title="Que manger après l'entraînement ?"
      image="/que-mange.jfif"
      category="Nutrition"
      date="08 Jan 2026"
    >
      <p>
        L alimentation post-workout joue un rôle clé dans la récupération et la
        prise de muscle. Pour optimiser vos résultats, il est essentiel de
        combiner <strong>protéines</strong>, <strong>glucides</strong> et
        <strong>hydration</strong>.
      </p>

      <div className="rounded-2xl p-8 my-10">
        <p className="text-[#EB1C22] text-sm uppercase tracking-wider mb-2 font-semibold">
          💡 Le saviez-vous ?
        </p>
        <p className="text-gray-200 text-lg">
          Consommer une combinaison de protéines et de glucides dans les 30
          minutes suivant l’entraînement peut accélérer la récupération et
          réduire les douleurs musculaires.
        </p>
      </div>

      <h2>1. 🥚 Œufs et blanc de poulet</h2>
      <p>
        Sources riches en protéines de haute qualité. Idéal pour la réparation
        musculaire après un entraînement intense.
      </p>
      <p>
        <strong>Recommandation :</strong> 20-30 g de protéines par repas.
      </p>

      <h2>2. 🍌 Bananes et fruits</h2>
      <p>
        Fournissent des glucides rapides pour restaurer les réserves de glycogène
        et des électrolytes pour l’hydratation.
      </p>
      <p>
        <strong>Recommandation :</strong> 1 à 2 fruits après l’effort.
      </p>

      <h2>3. 🥛 Smoothie protéiné</h2>
      <p>
        Mélange de lait ou boisson végétale + fruits + poudre de protéine.
        Idéal pour un encas post-entraînement pratique et nutritif.
      </p>
      <p>
        <strong>Recommandation :</strong> 1 verre après chaque séance.
      </p>

      <h2>4. 🍚 Riz complet et légumes</h2>
      <p>
        Les glucides complexes et les fibres aident à une récupération soutenue
        et maintiennent l’énergie pour le reste de la journée.
      </p>
      <p>
        <strong>Recommandation :</strong> 1 portion avec des légumes variés.
      </p>

      <h2>5. 🥜 Noix et graines</h2>
      <p>
        Fournissent des graisses saines et des protéines pour prolonger la
        récupération et soutenir le métabolisme.
      </p>
      <p>
        <strong>Recommandation :</strong> Une petite poignée par jour.
      </p>

      <blockquote>
        <p className="text-xl text-gray-200 italic">
          Une nutrition adaptée après l entraînement est aussi importante que
          l’entraînement lui-même. Ne négligez jamais votre récupération.
        </p>
        <p className="text-gray-400 mt-2">— Nutritionniste sportif</p>
      </blockquote>

      <p className="text-xl mt-12">
        👉 Planifiez vos repas post-workout pour maximiser vos performances et
        favoriser la croissance musculaire. Buvez également suffisamment
        d’eau pour rester hydraté.
      </p>

      <div className="mt-12 p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
        <p className="text-gray-400 text-sm">
          <strong>Note importante :</strong> Consultez un professionnel de
          santé ou un diététicien avant d’adopter de nouvelles habitudes
          alimentaires, surtout si vous avez des conditions médicales.
        </p>
      </div>
    </ArticleLayout>
  );
}
