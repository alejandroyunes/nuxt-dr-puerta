import { defineFormKitConfig } from "@formkit/vue"
import { es, en } from "@formkit/i18n"

export default defineFormKitConfig({
  locales: {
    es: {
      ...es,
      validation: {
        required: () => "Requerido.",
        name: () => "Debe ser un nombre válido.",
        email: () => "Debe ser un email válido.",
        phone: () => "Debe ser un teléfono válido.",
        matches: (node: { name: string }) => {
          switch (node.name) {
            case "phone":
              return "Debe ser un teléfono válido."
            default:
              return "Invalid type."
          }
        },
      },
    },
    en: {
      ...en,
      validation: {
        required: () => "Required.",
        name: () => "Must be a valid name.",
        email: () => "Must be a valid email.",
        phone: () => "Must be a valid phone.",
      },
    },
  },

  locale: "es",
})
