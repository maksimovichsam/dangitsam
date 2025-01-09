import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import emailjs from '@emailjs/browser';


const RsvpForm = () => {
  const [formData, setFormData] = useState({
    names: '',
    dietaryRestrictions: '',
    isAttending: '',
    isStayingAtHotel: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        "service_vm1c978",
        "template_wvquwlw", 
        {
            names: formData.names,
            message: JSON.stringify(formData)
        },
        {
            publicKey: 'tdSlQ5fewEX4ZU-9Z',
        }
      );

      setSubmitStatus({
        type: 'success',
        message: 'Your RSVP has been submitted successfully.'
      });
      setFormData({
        names: '',
        dietaryRestrictions: '',
        isAttending: '',
        isStayingAtHotel: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was a problem submitting your RSVP. Please email dangmaksimovichwedding@gmail.com with your RSVP'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Wedding RSVP</CardTitle>
      </CardHeader>
      <CardContent>
        {submitStatus.message && (
          <Alert className={`mb-4 ${submitStatus.type === 'error' ? 'bg-red-50' : 'bg-green-50'}`}>
            <AlertDescription>
              {submitStatus.message}
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="names">Names</Label>
            <Input
              id="names"
              name="names"
              value={formData.names}
              onChange={handleInputChange}
              placeholder="Enter full names"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
            <Textarea
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleInputChange}
              placeholder="Please list any dietary restrictions"
              className="min-h-24"
            />
          </div>

          <div className="space-y-2">
            <Label>Will you be attending the wedding?</Label>
            <RadioGroup
              name="isAttending"
              value={formData.isAttending}
              onValueChange={(value) => 
                handleInputChange({ target: { name: 'isAttending', value } })
              }
              required
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="attending-yes" />
                <Label htmlFor="attending-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="attending-no" />
                <Label htmlFor="attending-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Will you be using our hotel block? (Holiday Inn Express, Elk Grove, Hwy 99)</Label>
            <RadioGroup
              name="isStayingAtHotel"
              value={formData.isStayingAtHotel}
              onValueChange={(value) => 
                handleInputChange({ target: { name: 'isStayingAtHotel', value } })
              }
              required
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="hotel-yes" />
                <Label htmlFor="hotel-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="hotel-no" />
                <Label htmlFor="hotel-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RsvpForm;