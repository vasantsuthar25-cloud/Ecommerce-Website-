import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  timer?: boolean;
  arrows?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, timer, arrows }) => {
  return (
    <div className="flex flex-col gap-6 mb-10">
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-primary rounded-sm"></div>
        <span className="text-primary font-bold">{subtitle}</span>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex items-end gap-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">{title}</h2>
          
          {timer && (
            <div className="hidden md:flex gap-4 items-end pb-1">
               <div className="text-center">
                  <div className="text-xs font-medium">Days</div>
                  <div className="text-3xl font-bold leading-none">03<span className="text-primary ml-2">:</span></div>
               </div>
               <div className="text-center">
                  <div className="text-xs font-medium">Hours</div>
                  <div className="text-3xl font-bold leading-none">23<span className="text-primary ml-2">:</span></div>
               </div>
               <div className="text-center">
                  <div className="text-xs font-medium">Minutes</div>
                  <div className="text-3xl font-bold leading-none">19<span className="text-primary ml-2">:</span></div>
               </div>
               <div className="text-center">
                  <div className="text-xs font-medium">Seconds</div>
                  <div className="text-3xl font-bold leading-none">56</div>
               </div>
            </div>
          )}
        </div>

        {arrows && (
           <div className="flex gap-2">
             <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
             </button>
             <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
             </button>
           </div>
        )}
      </div>
    </div>
  );
};
