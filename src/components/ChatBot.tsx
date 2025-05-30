import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
      >
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold">SurgMedi Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="h-96 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                  Hello! How can I help you today?
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}