import { CheckIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Pop({ popupInfo, onClose }) {
  return (
    <div className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center">
      <div className={classNames('relative bg-gray-900 shadow-2xl', 'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 max-w-lg w-full')}>
        <button onClick={() => {onClose();}} className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold">×</button>
        <p className="text-5xl font-semibold tracking-tight text-white">
          {popupInfo.title}</p>
        <p className="mt-6 text-base/7 text-gray-300">{popupInfo.info}</p>
        <a href="/Projects" className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs
         hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">See more</a>
      </div>
    </div>
  );
}
