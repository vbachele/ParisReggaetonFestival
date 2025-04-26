import React from 'react';
import { Layout } from '@/components/Layout';
import ContactCard from '@/components/contact/ContactCard';
import AboutSection from '@/components/contact/AboutSection';
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-32 max-w-6xl">
        <Card className="border-none relative overflow-hidden group rounded-2xl bg-gray-100">
          <CardContent className="p-8">
            <AboutSection />
            <ContactCard />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Contact; 