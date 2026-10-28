import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, Send, CheckCircle2, Shield, Calendar, Clock, User, Phone, Mail, FileText, AlertCircle } from 'lucide-react';
import { WatchCard, BookingFormData } from '../types/watch';
import { WhatsAppIcon } from './icons/BrandIcons';

interface BookingModalProps {
  item: WatchCard | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ item, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    selectedItemName: '',
    category: '',
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (item) {
      setFormData((prev) => ({
        ...prev,
        selectedItemName: item.name,
        category: item.category,
      }));
      setIsSubmitted(false);
      setErrors({});
    }
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone number.';
    } else if (!/^[\d\s+()-]{6,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid telephone format.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred appointment date.';
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred appointment time.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  // Compose the WhatsApp message with user details
  const composedWhatsAppMessage = encodeURIComponent(
    `*Demande de Rendez-vous - Intemporel_geneve*\n\n` +
      `*Objet / Modèle:* ${formData.selectedItemName} (${formData.category})\n` +
      `*Nom Client:* ${formData.fullName}\n` +
      `*Téléphone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Date Souhaitée:* ${formData.preferredDate}\n` +
      `*Heure Souhaitée:* ${formData.preferredTime}\n` +
      (formData.message ? `*Message:* ${formData.message}\n` : '') +
      `\nDemande de rendez-vous auprès de la boutique Intemporel_geneve (Route des Jeunes 4bis, Genève).`
  );

  const whatsAppDirectUrl = `https://wa.me/41799660156?text=${composedWhatsAppMessage}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#0c1b33]/70 backdrop-blur-sm animate-fade-in"
    >
      <div
        className="relative w-full max-w-2xl lg:max-w-3xl bg-[#fcfbfa] rounded-2xl shadow-2xl border border-[#e2e8f0] overflow-hidden text-[#0c1b33] my-auto flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e8f0] bg-[#f8f5ee]">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#475569] hover:text-[#0c1b33] hover:bg-black/5 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <div className="h-4 w-px bg-[#cbd5e1]" />
            <h2 id="booking-modal-title" className="font-serif text-lg font-semibold text-[#0c1b33]">
              Boutique Appointment Enquiry
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="p-2 rounded-full text-[#475569] hover:text-[#0c1b33] hover:bg-black/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {/* Selected Item Banner */}
          <div className="mb-6 p-4 rounded-xl bg-[#f4efe6] border border-[#e2e8f0] flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-16 h-16 rounded-lg object-cover border border-[#cbd5e1] shrink-0"
            />
            <div className="min-w-0">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#c5a059] block">
                {item.category}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#0c1b33] truncate">
                {item.name}
              </h3>
              <p className="text-xs text-[#475569] mt-0.5">
                Location: Intemporel_geneve — Route des Jeunes 4bis, Geneva, Switzerland, 1227
              </p>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs text-[#475569] mb-2">
                Please complete the form below to initiate an enquiry. All fields marked with an asterisk (*) are required.
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0c1b33] mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#94a3b8] absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alessandro Rossi"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none ${
                      errors.fullName
                        ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                        : 'border-[#e2e8f0] bg-white focus:border-[#c5a059]'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Contact info: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0c1b33] mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#94a3b8] absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+39 333 1234567"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none ${
                        errors.phone
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-[#e2e8f0] bg-white focus:border-[#c5a059]'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0c1b33] mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#94a3b8] absolute left-3.5 top-3" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alessandro@example.it"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none ${
                        errors.email
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-[#e2e8f0] bg-white focus:border-[#c5a059]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0c1b33] mb-1.5">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#94a3b8] absolute left-3.5 top-3" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none ${
                        errors.preferredDate
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-[#e2e8f0] bg-white focus:border-[#c5a059]'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0c1b33] mb-1.5">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#94a3b8] absolute left-3.5 top-3" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none ${
                        errors.preferredTime
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-[#e2e8f0] bg-white focus:border-[#c5a059]'
                      }`}
                    >
                      <option value="">Select a time slot</option>
                      <option value="Morning (09:30 - 12:30)">Morning (09:30 - 12:30)</option>
                      <option value="Early Afternoon (15:30 - 17:00)">Early Afternoon (15:30 - 17:00)</option>
                      <option value="Late Afternoon (17:00 - 19:30)">Late Afternoon (17:00 - 19:30)</option>
                    </select>
                  </div>
                  {errors.preferredTime && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.preferredTime}
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0c1b33] mb-1.5">
                  Additional Message or Specific Interests (Optional)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-[#94a3b8] absolute left-3.5 top-3" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide any specific dial colors, wrist sizes, or special occasions..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#e2e8f0] bg-white focus:border-[#c5a059] text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="p-3 rounded-lg bg-[#f4efe6]/60 border border-[#e2e8f0] text-xs text-[#475569] flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  <strong>Privacy & Processing Notice:</strong> This website is an interactive demonstration. Submitting prepares your enquiry details so you can transmit them securely via official WhatsApp or call the boutique directly. No appointment is confirmed until verified by the boutique.
                </span>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#e2e8f0] bg-white hover:bg-[#f4efe6] text-xs font-semibold uppercase tracking-wider text-[#0c1b33] transition-colors"
                >
                  Return to Timepieces
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#0c1b33] hover:bg-[#162a4d] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 text-[#c5a059]" />
                  <span>Submit Appointment Enquiry</span>
                </button>
              </div>
            </form>
          ) : (
            /* Submission Confirmation & Working WhatsApp Handoff */
            <div className="py-4 space-y-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#128C7E]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#0c1b33]">
                  Enquiry Prepared Successfully
                </h3>
                <p className="text-sm text-[#475569] max-w-lg mx-auto">
                  Your appointment enquiry details for <strong>{formData.selectedItemName}</strong> are ready. Because this front-end operates as a client preview without a direct background email server, please send your pre-formatted enquiry directly via <strong>official WhatsApp</strong> or call our boutique.
                </p>
              </div>

              {/* Prepared Summary Box */}
              <div className="text-left bg-[#f4efe6] p-4 rounded-xl border border-[#e2e8f0] text-xs text-[#0c1b33] space-y-1.5 max-w-md mx-auto">
                <div><strong>Client Name:</strong> {formData.fullName}</div>
                <div><strong>Contact:</strong> {formData.phone} • {formData.email}</div>
                <div><strong>Selected Timepiece:</strong> {formData.selectedItemName}</div>
                <div><strong>Preferred Schedule:</strong> {formData.preferredDate} ({formData.preferredTime})</div>
                {formData.message && <div><strong>Notes:</strong> {formData.message}</div>}
              </div>

              {/* Working WhatsApp Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsAppDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm shadow-md transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Send via Official WhatsApp</span>
                </a>

                <a
                  href="tel:+41799660156"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0c1b33] hover:bg-[#162a4d] text-white font-semibold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Call Boutique Now</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#e2e8f0]">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs uppercase tracking-wider font-semibold text-[#475569] hover:text-[#0c1b33] transition-colors"
                >
                  Close & Return to Collection
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
