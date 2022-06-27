import { CaretRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

interface Params {
    slug: string;
}

export function Event() {

    const { slug } = useParams<{slug: string}>()


    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
          {slug ? (
            <Video lessonSlug={slug} />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="flex items-center gap-2 text-green-400 text-3xl">
                ESCOLHA UMA AULA <CaretRight size={24}/>
              </p>
            </div>
          )}
          <Sidebar />
        </main>
      </div>
    );
}