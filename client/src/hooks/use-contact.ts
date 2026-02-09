import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

type ContactSubmission = {
  name: string;
  email: string;
  message: string;
};

export function useCreateContactSubmission() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (_data: ContactSubmission) => {
      // Simulate API request (no backend)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Pretend success response
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    },
  });
}
