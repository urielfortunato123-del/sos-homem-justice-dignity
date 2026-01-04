import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  AlertTriangle, 
  Mic, 
  MicOff, 
  MapPin, 
  Phone, 
  Share2, 
  Shield,
  Square,
  Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SOSButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);
      setAudioBlob(null);

      toast({
        title: "Gravando",
        description: "Gravação de áudio iniciada",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível acessar o microfone",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      toast({
        title: "Gravação salva",
        description: "Áudio gravado com sucesso",
      });
    }
  };

  const getLocation = () => {
    setIsGettingLocation(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsGettingLocation(false);
          toast({
            title: "Localização obtida",
            description: "Sua localização foi capturada com sucesso",
          });
        },
        (error) => {
          setIsGettingLocation(false);
          toast({
            title: "Erro",
            description: "Não foi possível obter sua localização",
            variant: "destructive",
          });
        }
      );
    } else {
      setIsGettingLocation(false);
      toast({
        title: "Erro",
        description: "Geolocalização não suportada neste dispositivo",
        variant: "destructive",
      });
    }
  };

  const shareEmergency = async () => {
    const emergencyMessage = `🆘 EMERGÊNCIA - SOS Homem\n\n${
      location
        ? `📍 Localização: https://www.google.com/maps?q=${location.lat},${location.lng}`
        : "Localização não disponível"
    }\n\nPreciso de ajuda! Este é um alerta de emergência.`;

    if (navigator.share) {
      try {
        const shareData: ShareData = {
          title: "SOS - Emergência",
          text: emergencyMessage,
        };

        if (audioBlob) {
          const audioFile = new File([audioBlob], "sos-audio.webm", {
            type: "audio/webm",
          });
          shareData.files = [audioFile];
        }

        await navigator.share(shareData);
        toast({
          title: "Compartilhado",
          description: "Alerta de emergência enviado",
        });
      } catch (error) {
        // User cancelled or error
        if ((error as Error).name !== "AbortError") {
          // Fallback to clipboard
          await navigator.clipboard.writeText(emergencyMessage);
          toast({
            title: "Copiado",
            description: "Mensagem de emergência copiada para a área de transferência",
          });
        }
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(emergencyMessage);
      toast({
        title: "Copiado",
        description: "Mensagem de emergência copiada para a área de transferência",
      });
    }
  };

  const callEmergency = () => {
    window.location.href = "tel:190";
  };

  const callCVV = () => {
    window.location.href = "tel:188";
  };

  return (
    <>
      {/* Floating SOS Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 z-50 w-16 h-16 rounded-full bg-destructive text-destructive-foreground shadow-lg flex items-center justify-center animate-pulse hover:animate-none hover:scale-110 transition-transform"
        aria-label="Botão de Emergência SOS"
      >
        <Shield className="w-8 h-8" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-6 h-6" />
              Emergência SOS
            </DialogTitle>
            <DialogDescription>
              Use estas ferramentas em caso de emergência. Sua segurança é prioridade.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Emergency Calls */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="destructive"
                className="h-20 flex-col gap-2"
                onClick={callEmergency}
              >
                <Phone className="w-6 h-6" />
                <span className="text-sm">Polícia (190)</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={callCVV}
              >
                <Phone className="w-6 h-6" />
                <span className="text-sm">CVV (188)</span>
              </Button>
            </div>

            {/* Audio Recording */}
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Mic className="w-4 h-4" />
                Gravar Áudio de Emergência
              </h4>
              <div className="flex items-center gap-3">
                {isRecording ? (
                  <Button
                    variant="destructive"
                    size="lg"
                    onClick={stopRecording}
                    className="flex-1 gap-2"
                  >
                    <Square className="w-5 h-5" />
                    Parar ({formatTime(recordingTime)})
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={startRecording}
                    className="flex-1 gap-2"
                  >
                    <Mic className="w-5 h-5" />
                    {audioBlob ? "Gravar Novamente" : "Iniciar Gravação"}
                  </Button>
                )}
              </div>
              {audioBlob && !isRecording && (
                <div className="mt-3">
                  <audio
                    controls
                    className="w-full"
                    src={URL.createObjectURL(audioBlob)}
                  />
                </div>
              )}
            </div>

            {/* Location */}
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Sua Localização
              </h4>
              <Button
                variant="outline"
                onClick={getLocation}
                disabled={isGettingLocation}
                className="w-full gap-2"
              >
                {isGettingLocation ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Obtendo localização...
                  </>
                ) : (
                  <>
                    <MapPin className="w-4 h-4" />
                    {location ? "Atualizar Localização" : "Obter Localização"}
                  </>
                )}
              </Button>
              {location && (
                <p className="text-sm text-muted-foreground mt-2">
                  📍 Lat: {location.lat.toFixed(6)}, Lng: {location.lng.toFixed(6)}
                </p>
              )}
            </div>

            {/* Share Emergency */}
            <Button
              size="lg"
              className="w-full gap-2 bg-primary"
              onClick={shareEmergency}
            >
              <Share2 className="w-5 h-5" />
              Compartilhar Alerta de Emergência
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SOSButton;
