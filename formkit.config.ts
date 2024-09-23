import { defineFormKitConfig } from "@formkit/vue"
import { es } from "@formkit/i18n"

export default defineFormKitConfig({
  locales: {
    es: {
      ...es,
      validation: {
        required: () => "requerido.",
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
  },

  locale: "es",
})
