'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Copy, Code, Eye } from 'lucide-react';
import { useState } from 'react';

const buttonVariants = [
  { name: 'Default', variant: 'default' },
  { name: 'Destructive', variant: 'destructive' },
  { name: 'Outline', variant: 'outline' },
  { name: 'Secondary', variant: 'secondary' },
  { name: 'Ghost', variant: 'ghost' },
  { name: 'Link', variant: 'link' },
];

const buttonSizes = [
  { name: 'Default', size: 'default' },
  { name: 'Small', size: 'sm' },
  { name: 'Large', size: 'lg' },
  { name: 'Icon', size: 'icon' },
];

export default function ButtonPage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');

  const buttonComponentCode = `import { Button } from "@/components/ui/button"

function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      <Tabs defaultValue="preview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="h-4 w-4" /> Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center gap-2">
              <Code className="h-4 w-4" /> Code
            </TabsTrigger>
          </TabsList>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1"
            onClick={() => copyToClipboard(buttonComponentCode)}
          >
            <Copy className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              {copied ? 'Copied!' : 'Copy Code'}
            </span>
          </Button>
        </div>

        <TabsContent value="preview" className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Variants</h3>
            <div className="flex flex-wrap items-center gap-4">
              {buttonVariants.map(({ name, variant }) => (
                <Button key={variant} variant={variant as any}>
                  {name}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              {buttonSizes.map(({ name, size }) => (
                <Button key={size} size={size as any}>
                  {size === 'icon' ? <span>+</span> : name}
                </Button>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="relative">
            <pre className="p-4 bg-muted rounded-lg text-sm overflow-x-auto">
              <code className="language-tsx">{buttonComponentCode}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Installation</h2>
        <div className="relative">
          <pre className="p-4 bg-muted rounded-lg text-sm overflow-x-auto">
            <code>npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
