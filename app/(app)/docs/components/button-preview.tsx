'use client';

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const buttonVariants = [
  { name: 'default', label: 'Default' },
  { name: 'secondary', label: 'Secondary' },
  { name: 'destructive', label: 'Destructive' },
  { name: 'outline', label: 'Outline' },
  { name: 'ghost', label: 'Ghost' },
  { name: 'link', label: 'Link' },
];

const buttonSizes = [
  { name: 'default', label: 'Default' },
  { name: 'sm', label: 'Small' },
  { name: 'lg', label: 'Large' },
  { name: 'icon', label: 'Icon' },
];

export function ButtonPreview() {
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(false);

  const buttonCode = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(buttonCode);
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

      <div className="space-y-4">
        <Tabs defaultValue="preview" onValueChange={setActiveTab}>
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            {activeTab === 'code' && (
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-2"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                {copied ? 'Copied' : 'Copy'}
              </Button>
            )}
          </div>
          <TabsContent value="preview" className="mt-6">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-sm font-medium mb-4">Default</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button>Default</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4">Variants</h3>
                <div className="flex flex-wrap items-center gap-4">
                  {buttonVariants.map(({ name, label }) => (
                    <Button key={name} variant={name as any}>
                      {label}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  {buttonSizes.map(({ name, label }) => (
                    <Button key={name} size={name as any}>
                      {label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="code" className="relative mt-6">
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
              <code>{buttonCode}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Installation</h2>
        <Tabs defaultValue="npm">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-4">
            <div className="relative">
              <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
                <code>npx shadcn-ui@latest add button</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="pnpm" className="mt-4">
            <div className="relative">
              <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
                <code>pnpm dlx shadcn-ui@latest add button</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="yarn" className="mt-4">
            <div className="relative">
              <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
                <code>yarn dlx shadcn-ui@latest add button</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="bun" className="mt-4">
            <div className="relative">
              <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
                <code>bunx shadcn-ui@latest add button</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
