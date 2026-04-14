import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import AdHeader from '@/components/Ads/AdHeader'
import AdMobileSticky from '@/components/Ads/AdMobileSticky'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex flex-col min-h-screen">
        <Header locale={locale} />
        <AdHeader />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <AdMobileSticky />
      </div>
    </NextIntlClientProvider>
  )
}
