"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Footer } from "../compenents/Footer";
import { Navbar } from "../compenents/Navbar";

/* ZOD VALIDATION */

const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z
    .string()
    .regex(/^(0(5|6|7)\d{8}|\+212(5|6|7)\d{8})$/, "Numéro invalide"),
  subject: z.string().min(1, "Le sujet est requis"),
  message: z.string().min(1, "Le message est requis"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");

    try {
      const res = await fetch("https://formspree.io/f/meovalrq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }
  };

  return (
    <>
    <Navbar className="bg-zinc-950"/>
  <section className="bg-zinc-950 py-20 px-6">
          
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Contactez Farah Fitness
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Une question sur nos abonnements ou nos activités ?
            Contactez notre équipe et commencez votre transformation dès
            aujourd’hui.
          </p>
        </div>

        {/* CENTERED FORM */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6"
          >
            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("name")}
                  placeholder="Nom & Prénom*"
                  className={`w-full bg-zinc-950 border ${
                    errors.name ? "border-red-500" : "border-zinc-800"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB1C22]`}
                />

                {errors.name && (
                  <p className="text-red-500 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("email")}
                  placeholder="Email*"
                  className={`w-full bg-zinc-950 border ${
                    errors.email ? "border-red-500" : "border-zinc-800"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB1C22]`}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* PHONE + SUBJECT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("phone")}
                  placeholder="Téléphone*"
                  className={`w-full bg-zinc-950 border ${
                    errors.phone ? "border-red-500" : "border-zinc-800"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB1C22]`}
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("subject")}
                  placeholder="Sujet (Abonnement, Coaching...)"
                  className={`w-full bg-zinc-950 border ${
                    errors.subject ? "border-red-500" : "border-zinc-800"
                  } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB1C22]`}
                />

                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                {...register("message")}
                placeholder="Votre message..."
                rows={5}
                className={`w-full bg-zinc-950 border ${
                  errors.message ? "border-red-500" : "border-zinc-800"
                } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB1C22] resize-none`}
              />

              {errors.message && (
                <p className="text-red-500 text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#EB1C22] text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Envoi en cours..." : "ENVOYER"}
            </button>

            {/* SUCCESS */}
            {submitStatus === "success" && (
              <div className="bg-green-900/40 border border-green-700 text-green-300 p-4 rounded-lg text-center">
                Votre message a été envoyé ! Nous vous répondrons bientôt.
              </div>
            )}

            {/* ERROR */}
            {submitStatus === "error" && (
              <div className="bg-red-900/40 border border-red-700 text-red-300 p-4 rounded-lg text-center">
                Une erreur s’est produite. Veuillez réessayer.
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </section>
   </>  
  );
}