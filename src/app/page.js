import Image from 'next/image';
import Chatbot from './components/Chatbot';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
// import Utilityprovider from './providers/utilityprovider';

export default function Home() {
  return (
    // <Utilityprovider>
    <main className="flex h-screen overflow-hidden">
      <Sidebar />
      <Main />
      <Chatbot />
    </main>
    // </Utilityprovider>
  );
}
