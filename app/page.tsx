
import { useState } from \"react\";
import { Switch } from \"@/components/ui/switch\";
import { Card, CardContent } from \"@/components/ui/card\";
import { ScrollArea } from \"@/components/ui/scroll-area\";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const handleScroll = (e) => {
    const scroll = e.deltaY;
    setVolume((prev) => Math.max(0, Math.min(1, prev - scroll * 0.001)));
  };

  return (
    <div
      className={\`min-h-screen transition-all duration-300 ease-in-out \${darkMode ? \"bg-[#1e1e1e] text-white\" : \"bg-[#f9f9f9] text-black\"}\`}
      onWheel={handleScroll}
      style={{ fontFamily: 'Georgia, serif' }}
    >
      <audio src="/rain-and-fire-loop.mp3" autoPlay loop volume={volume} />

      <div className="flex justify-between items-center p-6" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
        <h1 className="text-3xl font-bold tracking-wide lowercase">whispers of wither</h1>
        <div className="flex items-center gap-3">
          <span>Dark Mode</span>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </div>
      </div>

      <main className="px-6 pb-12">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <Card>
            <CardContent className="p-4">
              <p>
                A quiet archive of reflections, essays, thoughts, and poems — born from dusk and written under rain. This is where I keep my inner monologues and ghosts. If you're here, welcome.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Archive</h2>
          <ScrollArea className="h-[60vh] rounded-md border p-4 space-y-4">
            <Card>
              <CardContent className="p-4 hover:bg-muted cursor-pointer">
                <h3 className="text-lg font-medium">An Echo Blooms from the Garden of Eden</h3>
                <p className="text-sm text-muted-foreground">A short poetic monologue about regret and hope tangled in rain.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 hover:bg-muted cursor-pointer">
                <h3 className="text-lg font-medium">There Is an Ache and It Won't Starve</h3>
                <p className="text-sm text-muted-foreground">On guilt, memory, and the imaginary rituals we build around shame.</p>
              </CardContent>
            </Card>
          </ScrollArea>
        </section>
      </main>
    </div>
  );
}
