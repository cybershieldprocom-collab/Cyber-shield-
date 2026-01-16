
import React, { useState } from 'react';
import { Bot, Send, Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { getLaptopRecommendation } from '../services/geminiService';

const AISuggestion: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');
    setError(null);
    
    try {
      const result = await getLaptopRecommendation(input);
      setResponse(result || 'Sorry, no recommendation could be generated.');
    } catch (err: any) {
      // Updated error message to be generic and not request API key updates or disclose technical environment details.
      setError("Walaal, cillad ayaa dhacday. Fadlan iska hubi internet-kaaga ama mar kale isku day.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative border border-white/10">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <Bot size={180} strokeWidth={1} />
      </div>
      
      <div className="relative z-10 max-w-3xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
            <Sparkles className="h-6 w-6 text-indigo-300" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">AI Shopping Assistant</h2>
            <p className="text-indigo-200 mt-1">Noo sheeg waxaad u baahan tahay, annagaa kuu doorayna laptop-ka kugu habboon.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tusaale: Waxaan ahay arday raba laptop fudud oo batteri fiican leh..."
            className="w-full px-6 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition-all text-lg"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-all flex items-center gap-2 disabled:opacity-50 disabled:scale-95 active:scale-95"
          >
            {isLoading ? <Loader2 className="animate-spin h-6 w-6" /> : <Send size={24} />}
          </button>
        </form>

        <div className="mt-8">
          {isLoading && (
            <div className="flex items-center gap-3 text-indigo-200 animate-pulse">
              <Loader2 className="animate-spin h-5 w-5" />
              <span>AI-gu hadda wuu falanqaynayaa codsigaaga...</span>
            </div>
          )}
          
          {error && (
            <div className="bg-red-500/20 border border-red-500/40 p-4 rounded-xl flex items-start gap-3 animate-in fade-in duration-300">
              <AlertTriangle className="text-red-400 shrink-0 mt-0.5" />
              <p className="text-red-100 text-sm">{error}</p>
            </div>
          )}
          
          {response && !isLoading && (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl animate-in fade-in zoom-in duration-500">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-indigo-300">
                <Bot size={14} />
                <span>AI Recommendation</span>
              </div>
              <p className="text-indigo-50 leading-relaxed text-lg italic font-medium">
                "{response}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AISuggestion;
