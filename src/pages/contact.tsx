import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: data.message || "Thank you for your message! We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-th-slate text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Ready to <span className="text-th-primary">Build Hope</span> Together?
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Whether you want to donate, volunteer, partner with us, or host a tiny home on your property, 
              we'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-th-primary h-5 w-5" />
                    <span>tinyhavenproject@outlook.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-th-primary h-5 w-5" />
                    <span>St. Petersburg, Florida</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/donate">
                    <Button className="bg-th-primary hover:bg-th-primary-dark text-white p-4 w-full">
                      Donate Now
                    </Button>
                  </Link>
                  <Link href="/what-we-do">
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-th-slate p-4"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center space-y-4">
                    <div className="text-th-primary text-6xl">✓</div>
                    <h3 className="text-xl font-semibold text-white">Thank You!</h3>
                    <p className="text-white/80">We've received your message and will get back to you soon.</p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-th-slate"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Your Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field}
                                placeholder="Your Name"
                                className="bg-white/20 border-white/30 text-white placeholder-white/70"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Your Email</FormLabel>
                            <FormControl>
                              <Input 
                                {...field}
                                type="email"
                                placeholder="Your Email"
                                className="bg-white/20 border-white/30 text-white placeholder-white/70"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="interest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">I'm interested in...</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="donation">Making a donation</SelectItem>
                                <SelectItem value="volunteer">Lending a hand / Volunteering</SelectItem>
                                <SelectItem value="supplies">Donating tools & supplies</SelectItem>
                                <SelectItem value="partnership">Becoming a land partner</SelectItem>
                                <SelectItem value="media">Media/press inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field}
                                rows={4}
                                placeholder="Tell us more about how you'd like to help..."
                                className="bg-white/20 border-white/30 text-white placeholder-white/70 resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-th-primary hover:bg-th-primary-dark text-white p-4 font-semibold"
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
