import { View, Text } from "react-native"
import { s } from "./styles"
import { Step } from "../step"
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native"

const steps = [
  {
    icon: IconMapPin,
    title: "Encontre estabelecimentos",
    description: "Veja locais perto de você que são parceiros Nearby"
  },
  {
    icon: IconQrcode,
    title: "Ative o cupom com QR Code",
    description: "Escaneie o código no estabelecimento para usar o benefício"
  },
  {
    icon: IconTicket,
    title: "Garanta vantagens perto de você",
    description: "Ative cupons onde estiver, em diferentes tipos de estabelecimento"
  },
]

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>
        Veja como funciona:
      </Text>

      {steps.map(step => {
        return (
          <Step title={step.title} description={step.description} icon={step.icon} />
        )
      })}
    </View>
  )
}