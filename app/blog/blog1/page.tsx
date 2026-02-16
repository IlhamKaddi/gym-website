import ArticleLayout from "../../compenents/ArticleLayout";

export default function Article() {
  return (
    <ArticleLayout
      title="5 exercices pour brûler la graisse rapidement"
      image="/exercices-pour-bruler.jfif"
      category="Training"
      date="12 Jan 2026"
    >
      <p>
        Perdre du gras efficacement demande de combiner <strong>intensité</strong>,{" "}
        <strong>régularité</strong> et <strong>discipline</strong>. Voici les 5
        exercices les plus efficaces pour brûler un maximum de calories et
        transformer votre physique.
      </p>

      <div className=" rounded-2xl p-8 my-10">
        <p className="text-purple-300 text-sm uppercase tracking-wider mb-2 font-semibold">
          💡 Le saviez-vous ?
        </p>
        <p className="text-gray-200 text-lg">
          Ces exercices augmentent votre métabolisme jusqu à 24h après
          l entraînement grâce à l effet EPOC (Excess Post-exercise Oxygen
          Consumption).
        </p>
      </div>

      <h2>1. 🔥 Burpees</h2>
      <p>
        Exercice complet qui sollicite tout le corps et augmente rapidement le
        rythme cardiaque. Les burpees combinent un squat, une planche, une
        pompe et un saut vertical pour un mouvement ultra-complet.
      </p>
      <p>
        <strong>Recommandation :</strong> 4 séries de 15 répétitions avec 30
        secondes de repos.
      </p>

      <h2>2. 💪 Squats sautés</h2>
      <p>
        Excellent pour brûler les graisses et renforcer les jambes. Cet
        exercice plyométrique développe la puissance explosive tout en
        sollicitant massivement les muscles des cuisses et des fessiers.
      </p>
      <p>
        <strong>Recommandation :</strong> 3 séries de 20 répétitions avec 45
        secondes de repos.
      </p>

      <h2>3. 🏔️ Mountain Climbers</h2>
      <p>
        Idéal pour le cardio et les abdominaux. Les mountain climbers sont
        parfaits pour brûler des calories tout en sculptant la sangle
        abdominale et en améliorant l endurance cardiovasculaire.
      </p>
      <p>
        <strong>Recommandation :</strong> 4 séries de 30 secondes à haute
        intensité.
      </p>

      <h2>4. ⚡ Sprint</h2>
      <p>
        Les intervalles de sprint activent fortement la combustion des graisses.
        Le sprint développe la vitesse, l explosivité et brûle énormément de
        calories en très peu de temps.
      </p>
      <p>
        <strong>Recommandation :</strong> 8 x 30 secondes de sprint avec 90
        secondes de récupération active.
      </p>

      <h2>5. 🪢 Corde à sauter</h2>
      <p>
        Simple mais extrêmement efficace pour un travail cardio intense. La
        corde à sauter améliore la coordination, l agilité et peut brûler
        jusqu à 500 calories en 30 minutes.
      </p>
      <p>
        <strong>Recommandation :</strong> 5 séries de 2 minutes avec 1 minute
        de repos.
      </p>

      <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 my-12">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">
          🎯 Plan d entraînement recommandé
        </h3>
        <ul className="space-y-3 text-gray-200">
          <li>
            ✓ <strong>Lundi :</strong> Circuit complet (exercices 1-5)
          </li>
          <li>
            ✓ <strong>Mercredi :</strong> Focus cardio (exercices 3, 4, 5)
          </li>
          <li>
            ✓ <strong>Vendredi :</strong> Circuit complet (exercices 1-5)
          </li>
          <li>
            ✓ <strong>Samedi :</strong> Focus explosivité (exercices 2, 4)
          </li>
        </ul>
      </div>

      <blockquote>
        <p className="text-xl text-gray-200 italic">
          La consistance bat l intensité. Faites ces exercices régulièrement
          et les résultats suivront naturellement.
        </p>
        <p className="text-gray-400 mt-2">— Coach professionnel</p>
      </blockquote>

      <p className="text-xl mt-12">
        👉 Faites ces exercices en circuit <strong>3 à 4 fois par semaine</strong> pour
        maximiser vos résultats. N oubliez pas de vous échauffer correctement
        avant chaque séance et de vous hydrater régulièrement.
      </p>

      <div className="mt-12 p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
        <p className="text-gray-400 text-sm">
          <strong>Note importante :</strong> Consultez toujours un professionnel
          de santé avant de commencer un nouveau programme d entraînement,
          surtout si vous avez des conditions médicales préexistantes.
        </p>
      </div>
    </ArticleLayout>
  );
}