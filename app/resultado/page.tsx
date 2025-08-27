"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  Gift,
  Star,
  Shield,
  ArrowRight,
  Check,
  Clock,
  AlertTriangle,
  BookOpen,
  Users,
  Zap,
  Target,
  Heart,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountdownTimer } from "@/components/countdown-timer"
import { enviarEvento } from "../../lib/analytics"

export default function ResultPageOptimized() {
  const [unlockedBonuses, setUnlockedBonuses] = useState<number[]>([])
  const [totalValue, setTotalValue] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [recentBuyers, setRecentBuyers] = useState(3)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedBonuses = localStorage.getItem("unlockedBonuses")
    const savedValue = localStorage.getItem("totalValue")
    
    if (savedBonuses) setUnlockedBonuses(JSON.parse(savedBonuses))
    if (savedValue) setTotalValue(Number.parseInt(savedValue))

    setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    // Simular compradores recientes con comportamiento más dinámico
    const interval = setInterval(() => {
      setRecentBuyers((prev) => {
        const increase = Math.floor(Math.random() * 3) + 1
        return Math.min(prev + increase, 17)
      })
    }, 30000)

    // Registra visualización de la página de resultado
    try {
      enviarEvento("visualizou_resultado")
      console.log("Evento de visualización registrado con éxito")
    } catch (error) {
      console.error("Error al registrar evento de visualización:", error)
    }

    return () => clearInterval(interval)
  }, [])

  const handlePurchase = () => {
    try {
      enviarEvento("clicou_comprar", {
        posicao: "principal",
      })
    } catch (error) {
      console.error("Error al registrar evento de clic:", error)
    }
    window.open("https://pay.hotmart.com/F100142422S?off=qqcmu6vg&checkoutMode=10", "_blank")
  }

  // Função simplificada, já que o alvo é sempre "ele"
  const getPersonalizedPronoun = () => "él"

  // Função para feedback táctil em dispositivos móviles
  const handleTouchFeedback = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden" ref={contentRef}>
      {/* HERO SECTION - RESULTADO IMPACTANTE */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 animate-pulse"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          className="relative z-10 px-4 py-8 text-center"
        >
          {/* Badge de Urgencia */}
          <div className="inline-flex items-center bg-red-600 text-white px-3 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 animate-bounce">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="whitespace-nowrap">RESULTADO DISPONIBLE POR TIEMPO LIMITADO</span>
          </div>

          {/* Headline Principal - Mobile Optimized */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-4 leading-tight px-2">
            🎯 <span className="text-orange-400">¡FELICITACIONES!</span>
            <br />
            TU CASO TIENE UN <span className="text-green-400">90,5%</span>
            <br />
            DE PROBABILIDAD DE QUE ÉL SE OBSESIONE
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto font-semibold px-4">
            Basándome en tus respuestas,{" "}
            <span className="text-orange-300 font-bold">{getPersonalizedPronoun()} está a punto de caer rendido a tus pies</span> y
            puedes tenerlo obsesionado en tan solo 21 días.
          </p>

          {/* Resultado Visual Impactante */}
          <div className="max-w-sm mx-auto mb-8 px-4">
            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 border-4 border-yellow-400 shadow-2xl">
              <CardContent className="p-4 sm:p-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                  <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-4 border-white mb-4">
                    <div className="text-center">
                      <span className="text-2xl sm:text-3xl font-extrabold text-black">90,5%</span>
                      <p className="text-xs font-bold text-black">COMPATIBLE</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">TU DIAGNÓSTICO:</h3>
                <div className="text-left space-y-2 text-white">
                  <div className="flex items-start">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      Tipo de situación: <strong>¡Perfecta para la obsesión!</strong>
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      Tiempo estimado: <strong>14-21 días</strong>
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      Estrategia recomendada: <strong>Mensajes Obsesivas</strong>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Principal - Mobile Optimized */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="mb-6 px-4"
          >
            <Button
              onClick={handlePurchase}
              size="lg"
              className="w-full max-w-sm mx-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-black py-4 sm:py-6 px-4 sm:px-8 rounded-full text-sm sm:text-lg md:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-4 border-yellow-400 min-h-[60px] flex items-center justify-center"
              onTouchStart={handleTouchFeedback}
            >
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
              <span className="text-center leading-tight">HACER QUE ÉL SE OBSESIONE AHORA POR $14</span>
              <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 ml-2 flex-shrink-0" />
            </Button>
          </motion.div>

          {/* Social Proof Dinámico */}
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white">
              <div className="flex items-center">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mr-1" />
                <span>
                  <strong className="text-orange-400">{recentBuyers}</strong> mujeres compraron hoy
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 mr-1" />
                <span>
                  Expira en: <CountdownTimer minutes={15} seconds={0} />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SECCIÓN DE URGENCIA Y ESCASEZ */}
      <div className="px-4 py-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-red-600 border-4 border-yellow-400 shadow-2xl">
            <CardContent className="p-4 sm:p-6 text-center">
              <AlertTriangle className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-300 mx-auto mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">⚠️ ATENCIÓN: VENTANA DE OPORTUNIDAD LIMITADA</h2>
              <p className="text-white text-sm sm:text-lg mb-4">
                <strong>Solo hoy</strong> tienes acceso a la fórmula completa por $14 (valor normal $97). Después de esta
                oferta, el precio vuelve a la normalidad y los bonos dejan de estar disponibles.
              </p>
              <div className="bg-black/30 p-3 sm:p-4 rounded-lg">
                <p className="text-yellow-300 font-bold text-lg sm:text-xl mb-2">LA OFERTA EXPIRA EN:</p>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  <CountdownTimer minutes={15} seconds={0} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* SECCIÓN MOCKUP DE CELULAR CON MENSAJES SECRETOS (VSL Principal) */}
      <div className="px-4 py-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              🎯 <span className="text-orange-400">DESCUBRE LA FÓRMULA</span> QUE HACE POSIBLE TU RESULTADO
            </h2>
            <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              3 especialistas revelan los{" "}
              <span className="text-orange-400 font-bold">disparadores psicológicos exactos</span> que harán que{" "}
              {getPersonalizedPronoun()} se obsesione contigo sin perseguir ni suplicar
            </p>
          </div>

          {/* MOCKUP DE CELULAR PRINCIPAL - TAMANHO AJUSTADO */}
          <div className="flex justify-center mb-8">
            <div className="phone-mockup main-phone w-full max-w-sm"> {/* max-w-sm para o celular principal */}
              <div className="screen">
                <div className="header">
                  <span className="time">9:41</span>
                  <div className="icons">
                    <span className="signal"></span>
                    <span className="wifi"></span>
                    <span className="battery"></span>
                  </div>
                </div>
                <div className="chat-area">
                  <div className="message received">
                    <p>¿Qué es lo que realmente lo hace obsesionarse?</p>
                  </div>
                  <div className="message sent">
                    <p>Es más simple de lo que crees. Son mensajes específicos...</p>
                  </div>
                  <div className="message received">
                    <p>¿Mensajes? ¿Cómo cuáles?</p>
                  </div>
                  <div className="message sent">
                    <p>
                      Los que activan su "cerebro reptiliano". Por ejemplo, el "Mensaje del Deseo Incontrolable"...
                    </p>
                  </div>
                  <div className="message received">
                    <p>¡Cuéntame más! ¿Y si ya tiene a otra?</p>
                  </div>
                  <div className="message sent">
                    <p>
                      Hay una secuencia para eso: el "Mensaje del Olvido" y el "Mensaje de la Única".
                    </p>
                  </div>
                  <div className="message received">
                    <p>¿Y si no responde?</p>
                  </div>
                  <div className="message sent">
                    <p>
                      La clave no es solo qué decir, sino cuándo y cómo. La "Fórmula de la Persecución Inversa" lo garantiza.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action após o mockup */}
          <div className="text-center">
            <div className="bg-orange-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full inline-block font-bold text-sm sm:text-lg mb-4 animate-bounce">
              �� APLICA ESTO Y VERÁS RESULTADOS EN DÍAS
            </div>

            {/* �� SEÇÃO DE DEPOIMENTOS EM CELULAR MOBILE - CENTRALIZADO */}
            <div className="my-8">
              <div className="text-center mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  �� <span className="text-orange-400">TESTIMONIOS REALES </span> DE QUIEN YA LO LOGRÓ
                </h3>
                <p className="text-gray-300 text-sm sm:text-base px-4">
                  Escucha las historias de mujeres que hicieron que él se obsesionara con ellas
                </p>
              </div>

              {/* Container dos Stories Centralizados - Agora com 2 celulares */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
                
                {/* TESTIMONIO 1 - Emília (CELULAR DE DEPOIMENTO) */}
                <div className="w-full max-w-xs"> {/* max-w-xs para os celulares de depoimento */}
                  <div className="relative bg-black rounded-2xl p-2 border-2 border-orange-500 shadow-xl overflow-hidden">
                    
                    {/* Header do Story 1 */}
                    <div className="flex items-center p-2 pb-1">
                      <div className="w-8 h-8 rounded-full border border-orange-400 overflow-hidden mr-2 flex-shrink-0">
                        {/* NOTA: SUBSTITUIR POR IMAGEM DE MULHER */}
                        <img 
                          src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/01.webp" // Placeholder
                          alt="Sofía S."
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <h4 className="text-white font-bold text-xs truncate">Emília B.</h4>
                        <p className="text-green-400 text-xs font-semibold">✅ Él obsesionado en 3 días</p>
                      </div>
                    </div>

                    {/* CELULAR DE DEPOIMENTO 1 */}
                    <div className="phone-mockup testimonial-phone">
                      <div className="screen">
                        <div className="header">
                          <span className="time">10:15</span>
                          <div className="icons">
                            <span className="signal"></span>
                            <span className="wifi"></span>
                            <span className="battery"></span>
                          </div>
                        </div>
                        <div className="chat-area">
                          <div className="message received">
                            <p>No puedo creerlo, ¡funciona!</p>
                          </div>
                          <div className="message sent">
                            <p>Mi ex me bloqueó y me dijo que nunca más me vería...</p>
                          </div>
                          <div className="message received">
                            <p>¿Y ahora?</p>
                          </div>
                          <div className="message sent">
                            <p>Seguí los 'Mensajes Obsesivas' al pie de la letra. En 17 días, me llamó llorando pidiendo volver. ¡Estamos comprometidos!</p>
                          </div>
                          <div className="message received">
                            <p>¡Increíble! ¿Y él?</p>
                          </div>
                          <div className="message sent">
                            <p>Está más obsesionado que nunca. ¡Gracias por esta fórmula!</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer com CTA 1 */}
                    <div className="p-2 text-center">
                      <Button
                        onClick={handlePurchase}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-2 px-3 rounded-full text-xs shadow-lg transition-all duration-300 min-h-[36px] flex items-center justify-center"
                        onTouchStart={handleTouchFeedback}
                      >
                        <Play className="w-3 h-3 mr-1 flex-shrink-0" />
                        <span className="truncate">QUIERO LOS MISMOS RESULTADOS</span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* TESTIMONIO 2 - Sofía S. (CELULAR DE DEPOIMENTO) */}
                <div className="w-full max-w-xs"> {/* max-w-xs para os celulares de depoimento */}
                  <div className="relative bg-black rounded-2xl p-2 border-2 border-orange-500 shadow-xl overflow-hidden">
                    
                    {/* Header do Story 2 */}
                    <div className="flex items-center p-2 pb-1">
                      <div className="w-8 h-8 rounded-full border border-orange-400 overflow-hidden mr-2 flex-shrink-0">
                        {/* NOTA: SUBSTITUIR POR IMAGEM DE MULHER */}
                        <img 
                          src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/1-dobra-1-e1756257363224.webp" // Placeholder
                          alt="Sofía S."
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <h4 className="text-white font-bold text-xs truncate">Sofía S.</h4>
                        <p className="text-green-400 text-xs font-semibold">✅ Él me ve como 'la única'</p>
                      </div>
                    </div>

                    {/* CELULAR DE DEPOIMENTO 2 */}
                    <div className="phone-mockup testimonial-phone">
                      <div className="screen">
                        <div className="header">
                          <span className="time">11:30</span>
                          <div className="icons">
                            <span className="signal"></span>
                            <span className="wifi"></span>
                            <span className="battery"></span>
                          </div>
                        </div>
                        <div className="chat-area">
                          <div className="message received">
                            <p>Pensé que no había esperanza.</p>
                          </div>
                          <div className="message sent">
                            <p>Él siempre me ignoraba, sentía que era una más...</p>
                          </div>
                          <div className="message received">
                            <p>¿Qué hiciste?</p>
                          </div>
                          <div className="message sent">
                            <p>Apliqué el 'Mensaje de la Única' y el 'Protocolo de Emergencia'. Su actitud cambió radicalmente.</p>
                          </div>
                          <div className="message received">
                            <p>¿Y ahora?</p>
                          </div>
                          <div className="message sent">
                            <p>Ahora me busca, me valora y me ve como la mujer más importante de su vida. ¡Es mágico!</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer com CTA 2 */}
                    <div className="p-2 text-center">
                      <Button
                        onClick={handlePurchase}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-2 px-3 rounded-full text-xs shadow-lg transition-all duration-300 min-h-[36px] flex items-center justify-center"
                        onTouchStart={handleTouchFeedback}
                      >
                        <Play className="w-3 h-3 mr-1 flex-shrink-0" />
                        <span className="truncate">QUIERO LOS MISMOS RESULTADOS</span>
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* 🔥 FIM DA SEÇÃO DE DEPOIMENTOS EM CELULAR MOBILE */}

            <p className="text-white text-sm sm:text-lg font-semibold px-4">
              Ahora que conoces la fórmula, es hora de <span className="text-orange-400">ponerla en práctica</span>
            </p>
          </div>
        </div>
      </div>

      {/* TRANSFORMAÇÃO ANTES/DEPOIS - MOBILE OPTIMIZED */}
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            TU VIDA EN <span className="text-red-400">21 DÍAS</span>
          </h2>

          <div className="grid gap-6">
            {/* ANTES */}
            <Card className="bg-gradient-to-r from-red-900 to-red-800 border-2 border-red-500">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-red-300 mb-4 text-center">😢 AHORA (SIN MENSAJES OBSESIVAS)</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white font-bold text-sm">✗</span>
                    </div>
                    <span className="text-red-100 text-sm sm:text-base">Sufriendo con el dolor de la indiferencia todos los días</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white font-bold text-sm">✗</span>
                    </div>
                    <span className="text-red-100 text-sm sm:text-base">Intentando estrategias que solo lo alejan más</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white font-bold text-sm">✗</span>
                    </div>
                    <span className="text-red-100 text-sm sm:text-base">Viendo cómo {getPersonalizedPronoun()} te ignora y se aleja cada vez más</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DESPUÉS */}
            <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-2 border-green-400">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-green-100 mb-4 text-center">😍 EN 21 DÍAS (CON MENSAJES OBSESIVAS)</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-800" />
                    </div>
                    <span className="text-green-100 font-semibold text-sm sm:text-base">
                      {getPersonalizedPronoun()} bombardeándote con mensajes y llamadas
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-800" />
                    </div>
                    <span className="text-green-100 font-semibold text-sm sm:text-base">Viendo cómo él te mira con deseo y adoración</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-800" />
                    </div>
                    <span className="text-green-100 font-semibold text-sm sm:text-base">
                      Teniéndolo comiendo de tu mano y completamente obsesionado
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Estratégico */}
          <div className="text-center mt-8 px-4">
            <Button
              onClick={handlePurchase}
              size="lg"
              className="w-full max-w-sm mx-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 sm:py-5 px-4 sm:px-6 rounded-full text-sm sm:text-lg shadow-xl transition-all duration-300 min-h-[56px] flex items-center justify-center"
              onTouchStart={handleTouchFeedback}
            >
              <span className="text-center leading-tight">QUIERO ESTA TRANSFORMACIÓN</span>
              <Target className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
            </Button>
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF IMPACTANTE */}
      <div className="px-4 py-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">RESULTADOS COMPROBADOS</h2>
          <p className="text-orange-400 text-sm sm:text-lg mb-8">Más de 3.847 mujeres ya hicieron que él se obcecase por ellas</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-orange-500">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">87%</div>
              <p className="text-white text-sm sm:text-base">Ven resultados en 14 días</p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-orange-500">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">3.847+</div>
              <p className="text-white text-sm sm:text-base">Hombres obsesionados</p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-orange-500">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">21</div>
              <p className="text-white text-sm sm:text-base">Días o menos</p>
            </div>
          </div>

          {/* Testimonio Destacado */}
          <Card className="bg-white shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-200 overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
                  {/* NOTA: SUBSTITUIR POR IMAGEM DE MULHER */}
                  <img
                    src="https://comprarplanseguro.shop/wp-content/uploads/2025/08/Captura-de-Tela-2025-08-08-as-19.24.05.png" // Placeholder
                    alt="Emília R."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Emília R., 29 años</h4>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-lg font-semibold mb-3">
                "Él había bloqueado mi número y decía que nunca más quería verme. Seguí la fórmula de Mensajes Obsesivas exactamente como
                estaba escrito y en 17 días me llamó llorando pidiendo que volviéramos. ¡Hoy estamos comprometidos y él está más obsesionado que nunca!"
              </p>
              <div className="text-xs sm:text-sm text-green-600 font-bold">✅ Él está obsesionado hace 8 meses</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* OFERTA PRINCIPAL - MOBILE OPTIMIZED */}
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl border-4 border-yellow-400">
            <CardContent className="p-4 sm:p-8 text-center">
              <div className="bg-yellow-400 text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full inline-block mb-4 sm:mb-6 text-sm sm:text-lg">
                🔥 OFERTA ESPECIAL - SOLO HOY
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">MENSAJES OBSESIVAS - OBSESIÓN GARANTIZADA</h2>

              <p className="text-lg sm:text-xl mb-6 sm:mb-8 font-semibold">Fórmula Completa + 2 Bonos Exclusivos</p>

              {/* Productos Incluidos */}
              <div className="bg-white/20 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-4 sm:mb-6 text-center">LO QUE RECIBES HOY:</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-white">MENSAJES OBSESIVAS: Fórmula Completa</h4>
                      <p className="text-gray-200 mb-2 text-sm sm:text-base">
                        4 módulos con estrategias paso a paso para que él se obsesione contigo
                      </p>
                      <div className="flex items-center">
                        <span className="text-gray-300 line-through mr-2 text-sm sm:text-lg">$97</span>
                        <span className="text-yellow-300 font-bold text-lg sm:text-xl">$14</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                      <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-white">BONO #1: 21 Disparadores de Obsesión</h4>
                      <p className="text-gray-200 mb-2 text-sm sm:text-base">Frases exactas que lo harán pensar solo en ti</p>
                      <div className="flex items-center">
                        <span className="text-gray-300 line-through mr-2 text-sm sm:text-lg">$47</span>
                        <span className="text-green-400 font-bold text-lg sm:text-xl">GRATIS</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-white">BONO #2: Protocolo de Emergencia</h4>
                      <p className="text-gray-200 mb-2 text-sm sm:text-base">Guía para situaciones críticas en las primeras 72 horas</p>
                      <div className="flex items-center">
                        <span className="text-gray-300 line-through mr-2 text-sm sm:text-lg">$37</span>
                        <span className="text-green-400 font-bold text-lg sm:text-xl">GRATIS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resumen de la Oferta */}
              <div className="bg-black/30 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <h4 className="font-bold text-yellow-300 mb-2 text-sm sm:text-base">VALOR TOTAL:</h4>
                    <div className="text-2xl sm:text-3xl font-bold">
                      <span className="line-through text-gray-400">$181</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-300 mb-2 text-sm sm:text-base">HOY SOLO:</h4>
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-300">$14</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-green-400 font-bold text-lg sm:text-xl">¡AHORRAS $167!</p>
                </div>
              </div>

              {/* CTA Principal Gigante */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="mb-6"
              >
                <Button
                  onClick={handlePurchase}
                  size="lg"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-black py-4 sm:py-6 px-4 sm:px-8 rounded-full text-lg sm:text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-4 border-white min-h-[64px] flex items-center justify-center"
                  onTouchStart={handleTouchFeedback}
                >
                  <span className="text-center leading-tight">💕 HACER QUE ÉL SE OBSESIONE AHORA POR $14</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 flex-shrink-0" />
                </Button>
              </motion.div>

              <div className="flex justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white flex-wrap mb-4">
                <div className="flex items-center">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1" />
                  <span>Acceso inmediato</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1" />
                  <span>Garantía 30 días</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1" />
                  <span>Soporte incluido</span>
                </div>
              </div>

              {recentBuyers > 0 && (
                <div className="bg-red-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full inline-block font-bold text-sm sm:text-base">
                  🔥 ¡{recentBuyers} mujeres compraron en las últimas 2 horas!
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* GARANTÍA */}
      <div className="px-4 py-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-green-50 border-4 border-green-400 shadow-2xl">
            <CardContent className="p-4 sm:p-8 text-center">
              <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-green-600 mx-auto mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">GARANTÍA TOTAL DE 30 DÍAS</h2>
              <p className="text-green-700 text-lg sm:text-xl font-semibold mb-4">
                Si no ves resultados, te devolvemos el 100% de tu dinero
              </p>
              <p className="text-green-600 max-w-2xl mx-auto text-sm sm:text-base">
                Estamos tan seguros de que esta fórmula va a funcionar para ti que ofrecemos una garantía completa. Si
                sigues el plan durante 30 días y él no se obsesiona contigo, te devolvemos todo tu dinero sin hacer preguntas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ ESENCIAL - MOBILE OPTIMIZED */}
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">PREGUNTAS FRECUENTES</h2>

          <div className="space-y-4">
            <Card className="bg-gray-800 border border-gray-700">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-3">
                  ¿Y si {getPersonalizedPronoun()} ya está con otra persona?
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  La fórmula funciona incluso cuando hay terceras personas involucradas. El 67% de nuestras historias de éxito de obsesión masculina comenzaron exactamente en esta situación. El Módulo 3 enseña estrategias específicas para que él la olvide y solo te vea a ti.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border border-gray-700">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-3">¿Cuánto tiempo tarda en ver resultados?</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  El 87% de las usuarias ven los primeros cambios positivos en menos de 14 días. La fórmula completa
                  está diseñada para funcionar en 21 días, pero muchas consiguen resultados más rápidos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border border-gray-700">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-3">¿Cómo recibo el acceso?</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Inmediatamente después de la confirmación del pago, recibes un email con tus credenciales de acceso.
                  Todo el contenido queda disponible al momento, incluyendo los bonos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA FINAL URGENTE */}
      <div className="px-4 py-8 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border-4 border-yellow-400">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">⏰ ÚLTIMA OPORTUNIDAD</h2>
            <p className="text-lg sm:text-xl text-white mb-6 font-semibold px-2">
              Esta oferta expira en pocos minutos. Después de esto, el precio vuelve a los $97 normales.
            </p>

            <div className="bg-red-800 p-3 sm:p-4 rounded-lg mb-6">
              <p className="text-yellow-300 font-bold text-sm sm:text-lg mb-2">TIEMPO RESTANTE:</p>
              <div className="text-3xl sm:text-4xl font-black text-white">
                <CountdownTimer minutes={15} seconds={0} />
              </div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],}}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="px-4"
            >
              <Button
                onClick={handlePurchase}
                size="lg"
                className="w-full max-w-md mx-auto bg-yellow-500 hover:bg-yellow-600 text-black font-black py-4 sm:py-6 px-4 sm:px-8 rounded-full text-lg sm:text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-4 border-white min-h-[64px] flex items-center justify-center"
                onTouchStart={handleTouchFeedback}
              >
                <span className="text-center leading-tight">💕 ¡SÍ, QUIERO QUE ÉL SE OBSESIONE AHORA!</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 flex-shrink-0" />
              </Button>
            </motion.div>

            <p className="text-yellow-300 text-xs sm:text-sm mt-4 font-semibold">
              Haz clic ahora antes de que sea demasiado tarde
            </p>
          </div>
        </div>
      </div>

      {/* Estilos CSS Mobile-First + Mockup de Celular */}
      <style jsx global>{`
        /* Reset para evitar scroll horizontal */
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        /* Container principal sem overflow */
        .min-h-screen {
          max-width: 100vw;
          overflow-x: hidden;
        }

        /* Estilos base para o Mockup de Celular */
        .phone-mockup {
          background: #222;
          border-radius: 36px;
          padding: 12px;
          box-shadow: 0 0 0 8px #333, 0 0 0 10px #444, 0 0 0 12px #555, 0 20px 50px rgba(0, 0, 0, 0.7);
          position: relative;
          aspect-ratio: 9 / 19; /* Proporção de tela de celular comum */
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .phone-mockup::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 10px;
          background: #333;
          border-radius: 0 0 8px 8px;
          z-index: 2;
        }

        .phone-mockup .screen {
          background: #1a1a1a;
          border-radius: 24px;
          flex-grow: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .phone-mockup .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 16px;
          background: #1a1a1a;
          color: #fff;
          font-size: 12px;
          font-weight: bold;
          border-bottom: 1px solid #333;
        }

        .phone-mockup .icons span {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: #fff;
          border-radius: 2px;
          margin-left: 4px;
        }
        .phone-mockup .icons .signal { width: 8px; height: 8px; background: linear-gradient(to right, #fff 50%, transparent 50%); }
        .phone-mockup .icons .wifi { width: 12px; height: 10px; border: 2px solid #fff; border-radius: 50%; border-bottom-color: transparent; border-left-color: transparent; border-right-color: transparent; transform: rotate(45deg); }
        .phone-mockup .icons .battery { width: 18px; height: 10px; border: 1px solid #fff; border-radius: 2px; position: relative; }
        .phone-mockup .icons .battery::after { content: ''; position: absolute; top: 2px; right: -3px; width: 2px; height: 6px; background: #fff; border-radius: 1px; }

        .phone-mockup .chat-area {
          flex-grow: 1;
          padding: 15px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #1a1a1a;
        }

        .phone-mockup .message {
          max-width: 80%;
          padding: 10px 12px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.4;
          word-wrap: break-word;
          animation: fadeInMessage 0.5s ease-out forwards;
          opacity: 0;
          transform: translateY(10px);
        }

        .phone-mockup .message.received {
          background: #333;
          color: #eee;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }

        .phone-mockup .message.sent {
          background: #007bff; /* Cor azul para mensagens enviadas */
          color: #fff;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }

        /* Animação para mensagens */
        @keyframes fadeInMessage {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Ajustes de tamanho para os celulares */
        .phone-mockup.main-phone {
          max-width: 384px; /* max-w-sm */
        }

        .phone-mockup.testimonial-phone {
          max-width: 280px; /* Um pouco menor que max-w-xs (320px) */
          padding: 8px; /* Reduzir o padding para caber mais conteúdo */
          border-radius: 28px;
        }

        .phone-mockup.testimonial-phone::before {
          width: 80px;
          height: 8px;
        }

        .phone-mockup.testimonial-phone .screen {
          border-radius: 20px;
        }

        .phone-mockup.testimonial-phone .header {
          padding: 6px 12px;
          font-size: 10px;
        }

        .phone-mockup.testimonial-phone .message {
          font-size: 12px;
          padding: 8px 10px;
          border-radius: 16px;
          gap: 8px;
        }

        /* Otimizações específicas para mobile */
        @media (max-width: 768px) {
          /* Previne overflow horizontal */
          * {
            max-width: 100vw;
            box-sizing: border-box;
          }

          /* Containers responsivos */
          .container, .max-w-4xl, .max-w-3xl, .max-w-2xl {
            max-width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          /* Textos responsivos */
          .text-3xl {
            font-size: 1.5rem !important;
            line-height: 2rem !important;
          }

          .text-4xl {
            font-size: 1.875rem !important;
            line-height: 2.25rem !important;
          }

          .text-5xl {
            font-size: 2.25rem !important;
            line-height: 2.5rem !important;
          }

          /* Botões otimizados para touch */
          button {
            min-height: 48px !important;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }

          /* Melhor legibilidade */
          p, span, div {
            line-height: 1.6 !important;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          /* Cards responsivos */
          .timeline-card {
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 100% !important;
          }
          
          .product-image {
            max-height: 200px;
            object-fit: contain;
          }
          
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }

          /* Flexbox melhorado para mobile */
          .flex {
            flex-wrap: wrap;
          }

          .flex-shrink-0 {
            flex-shrink: 0 !important;
          }

          /* Espaçamentos otimizados */
          .px-4 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .py-8 {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }

          /* Grid responsivo */
          .grid {
            gap: 1rem !important;
          }

          /* Centralização melhorada */
          .justify-center {
            justify-content: center !important;
          }

          .items-center {
            align-items: center !important;
          }

          .text-center {
            text-align: center !important;
          }

          /* Truncate para textos longos */
          .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          /* Min-width para evitar colapso */
          .min-w-0 {
            min-width: 0 !important;
          }

          /* Testimonios responsivos */
          .flex-col.sm\:flex-row {
            flex-direction: column !important; /* Forçar coluna em mobile */
            justify-content: center !important;
            align-items: center !important;
          }

          .flex-col.sm\:flex-row > div {
            width: 100% !important;
            max-width: 280px !important; /* Manter o max-width para os celulares de depoimento */
            margin: 0 auto !important;
          }
        }

        /* Animações otimizadas para performance */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Melhorias de performance */
        .bg-gradient-to-r, .bg-gradient-to-br {
          will-change: transform;
          backface-visibility: hidden;
        }

        /* Scroll suave */
        html {
          scroll-behavior: smooth;
        }

        /* Otimização de imagens */
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        /* Previne zoom em inputs (iOS) */
        input, select, textarea {
          font-size: 16px !important;
        }

        /* Melhora a área de toque */
        a, button, [role="button"] {
          min-height: 44px;
          min-width: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* Otimizações específicas para stories lado a lado em telas maiores */
        @media (min-width: 640px) {
          .flex-col.sm\:flex-row {
            flex-direction: row !important; /* Voltar para linha em telas maiores */
            justify-content: center !important;
            align-items: flex-start !important;
          }

          .flex-col.sm\:flex-row > div {
            flex: 0 0 auto !important;
            width: auto !important; /* Deixar o width ser definido pelo max-width */
          }
        }

        /* Melhorar a experiência de toque nos stories */
        .story-container {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  )
}