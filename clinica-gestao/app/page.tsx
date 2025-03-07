import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Building2, Stethoscope, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Stethoscope className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">ClinicaGestão</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/sobre" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Sobre
              </Link>
              <Link href="/precos" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Preços
              </Link>
              <Link href="/contato" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Contato
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button asChild variant="outline" className="ml-auto hidden md:flex">
                <Link href="/login">Entrar</Link>
              </Button>
            </div>
            <Button asChild>
              <Link href="/cadastro">Cadastrar</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Gestão completa para sua clínica médica
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Simplifique a administração da sua clínica com nosso sistema completo de gestão. Controle de
                    pacientes, agendamentos, faturamento e muito mais.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/cadastro">
                      Começar agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/demo">Agendar demonstração</Link>
                  </Button>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=550&width=800"
                alt="Dashboard da plataforma"
                width={550}
                height={550}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Funcionalidades para todos os níveis
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa plataforma oferece soluções específicas para cada perfil de usuário, desde administradores até
                  médicos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Building2 className="h-10 w-10 mb-2" />
                  <CardTitle>Administradores</CardTitle>
                  <CardDescription>Controle total sobre a plataforma e usuários</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Gerenciamento de subadministradores</li>
                    <li>Controle de permissões</li>
                    <li>Relatórios gerenciais</li>
                    <li>Configurações da plataforma</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 mb-2" />
                  <CardTitle>Subadministradores</CardTitle>
                  <CardDescription>Gestão completa da clínica</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Gerenciamento de médicos</li>
                    <li>Faturamento e notas fiscais</li>
                    <li>Análise de desempenho</li>
                    <li>Relatórios operacionais</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Stethoscope className="h-10 w-10 mb-2" />
                  <CardTitle>Médicos</CardTitle>
                  <CardDescription>Foco no atendimento ao paciente</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Agenda de consultas</li>
                    <li>Prontuário eletrônico</li>
                    <li>Cadastro de pacientes</li>
                    <li>Histórico de atendimentos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} ClinicaGestão. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}

