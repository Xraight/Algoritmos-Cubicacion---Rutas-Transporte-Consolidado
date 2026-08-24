import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Package, Truck, TrendingUp, Clock, FileText, Send } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4">
      
      {/* Encabezado */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Reportes y Analíticas</h2>
        <p className="text-muted-foreground">
          Resumen general de la operación de transporte consolidado.
        </p>
      </div>

      {/* KPis) */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Paquetes</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-muted-foreground">+18% respecto al mes pasado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rutas Completadas</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">8 en curso actualmente</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Eficiencia de Entrega</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.5%</div>
            <p className="text-xs text-muted-foreground">+2.1% de mejora</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 días</div>
            <p className="text-xs text-muted-foreground">Por ruta interestatal</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficas o Tablas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Volumen de Entregas (Histórico)</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 flex items-center justify-center min-h-[300px] bg-muted/20 border-dashed border-2 rounded-md m-4">
            <p className="text-muted-foreground text-sm">Módulo de gráfica pendiente</p>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Rutas con Mayor Retraso</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Aquí podemos poner una lista o tabla de las rutas problemáticas.
            </p>
          </CardContent>
        </Card>
      </div>

      {/*  Formulario de Reporte Manual */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <CardTitle>Generar Reporte Manual</CardTitle>
          </div>
          <CardDescription>
            Ingresa los detalles para registrar una incidencia, retraso o nota general del viaje.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/*  preventDefault para que no recargue la página al darle Enter */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium leading-none">
                  Título del reporte
                </label>
                <input
                  id="title"
                  placeholder="Ej. Tráfico pesado en caseta, Paquete dañado..."
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium leading-none">
                  Tipo de incidencia
                </label>
                <select
                  id="type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="incidencia">Incidencia General</option>
                  <option value="retraso">Retraso Operativo</option>
                  <option value="danio">Daño de Mercancía</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium leading-none">
                Descripción detallada
              </label>
              <textarea
                id="description"
                placeholder="Describe qué sucedió y si requiere atención inmediata..."
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2"
              >
                <Send className="h-4 w-4" />
                Guardar Reporte
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
      
    </div>
  );
}