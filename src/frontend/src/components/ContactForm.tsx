import { useState } from 'react';
import { useActor } from '../hooks/useActor';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Loader2, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const { actor } = useActor();
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (!actor) {
      setError('Unable to connect to the service. Please try again.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const timestamp = BigInt(Date.now());
      await actor.submitContactEntry(
        formData.name,
        formData.companyName || '',
        formData.email,
        formData.message,
        timestamp
      );

      setIsSuccess(true);
      setFormData({
        name: '',
        companyName: '',
        email: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-card-foreground">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your message has been received. We'll get back to you as soon as possible.
          </p>
          <Button onClick={() => setIsSuccess(false)} variant="outline">
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
      <h3 className="text-2xl font-bold mb-6 text-card-foreground">
        Request a Quote
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-card-foreground">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="mt-2"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="companyName" className="text-card-foreground">
            Company Name (Optional)
          </Label>
          <Input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Your company name"
            className="mt-2"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-card-foreground">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="mt-2"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-card-foreground">
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project requirements..."
            className="mt-2 min-h-[150px]"
            disabled={isSubmitting}
          />
        </div>

        {error && (
          <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to be contacted regarding your inquiry.
        </p>
      </form>
    </div>
  );
}
