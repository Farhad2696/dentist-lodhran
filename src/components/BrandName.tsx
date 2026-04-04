import React from 'react';

/** Plain name for titles, meta, WhatsApp — no styling */
export const BRAND_NAME_PLAIN = 'Dentist In Lodhran';

type Variant = 'header' | 'hero' | 'footer' | 'footerCopyright' | 'about';

type Props = {
  variant?: Variant;
  className?: string;
};

/**
 * "Dentist In Lodhran" — the word **In** uses a strong red accent for contrast.
 */
export const BrandName: React.FC<Props> = ({ variant = 'header', className = '' }) => {
  const wrap = (inner: React.ReactNode) => <span className={className}>{inner}</span>;

  switch (variant) {
    case 'hero':
      return wrap(
        <>
          <span className="text-teal-100/95">Dentist </span>
          <span className="text-red-400 font-bold">In</span>
          <span className="text-teal-100/95"> Lodhran</span>
        </>
      );
    case 'footer':
      return wrap(
        <>
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Dentist{' '}
          </span>
          <span className="text-red-400 font-bold">In</span>
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {' '}
            Lodhran
          </span>
        </>
      );
    case 'footerCopyright':
      return wrap(
        <>
          <span className="text-gray-400">Dentist </span>
          <span className="text-red-400 font-semibold">In</span>
          <span className="text-gray-400"> Lodhran</span>
        </>
      );
    case 'about':
      return wrap(
        <>
          <span className="text-slate-900">Dentist </span>
          <span className="text-red-600 font-bold">In</span>
          <span className="text-slate-900"> Lodhran</span>
        </>
      );
    case 'header':
    default:
      return wrap(
        <>
          <span className="bg-gradient-to-r from-teal-800 to-teal-600 bg-clip-text text-transparent">
            Dentist{' '}
          </span>
          <span className="text-red-600 font-bold">In</span>
          <span className="bg-gradient-to-r from-teal-800 to-teal-600 bg-clip-text text-transparent">
            {' '}
            Lodhran
          </span>
        </>
      );
  }
};
