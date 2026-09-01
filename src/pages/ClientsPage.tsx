import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Plus, MoreHorizontal, Building2, MapPin, Star, X, Save, TrendingUp } from "lucide-react";

export default function ClientsPage() {
  const [showNewClientForm, setShowNewClientForm] = useState(false);

  // Arreglo vacío listo para recibir los datos del backend
  const clients: any[] = []; 

  const getPriorityBadge = (priority: string) => {
    switch (priority?.toLowerCase()) {
      case "vip": return "bg-purple-100 text-purple-800 border-purple-200";
      case "alta demanda": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4">
      
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Clientes</h2>
          <p className="text-muted-foreground">
            Directorio comercial e historial ({clients.length} registrados).
          </p>
        </div>
        <button 
          onClick={() => setShowNewClientForm(!showNewClientForm)}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2"
        >
          {showNewClientForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {showNewClientForm ? "Cancelar" : "Nuevo cliente"}
        </button>
      </div>

      {/* Formulario de Nuevo Cliente */}
      {showNewClientForm && (
        <Card className="border-primary/20 shadow-sm animate-in fade-in slide-in-from-top-4 duration-200">
          <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
            <CardTitle className="text-base font-semibold">Registrar Nuevo Cliente</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowNewClientForm(false); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Empresa / Razón Social</label>
                  <input placeholder="Ej. Logística Nacional S.A." className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Contacto Principal</label>
                  <input placeholder="Nombre completo" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Ciudad / Ubicación</label>
                  <input placeholder="Ej. Monterrey, NL" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Tipo de Cliente</label>
                  <select defaultValue="" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                    <option value="" disabled>Selecciona un tipo...</option>
                    <option value="mayorista">Mayorista</option>
                    <option value="minorista">Minorista</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button type="submit" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 gap-2">
                  <Save className="h-4 w-4" /> Guardar Cliente
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Barra de Búsqueda y Filtros */}
      <Card>
        <CardContent className="p-4 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Buscar por ID, nombre o empresa..." 
              className="flex h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 py-1 text-sm shadow-sm"
            />
          </div>
          <select className="flex h-9 w-full sm:w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
            <option value="">Todos los estatus</option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
            <option value="moroso">Moroso</option>
          </select>
          <select className="flex h-9 w-full sm:w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
            <option value="">Tipo de Cliente</option>
            <option value="mayorista">Mayorista</option>
            <option value="minorista">Minorista</option>
          </select>
        </CardContent>
      </Card>

      {/* Tabla Comercial */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b">
              <tr>
                <th className="px-6 py-4 font-medium">ID / Empresa</th>
                <th className="px-6 py-4 font-medium">Contacto</th>
                <th className="px-6 py-4 font-medium">Ubicación</th>
                <th className="px-6 py-4 font-medium">Métricas</th>
                <th className="px-6 py-4 font-medium">Prioridad</th>
                <th className="px-6 py-4 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {clients.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-muted-foreground">
                    No hay clientes registrados en la base de datos.
                  </td>
                </tr>
              ) : (
                clients.map((client: any) => (
                  <tr key={client.id} className="hover:bg-muted/50 transition-colors bg-background">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{client.company}</div>
                          <div className="text-xs text-muted-foreground">{client.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-medium">{client.contact}</span>
                        <span className="text-xs text-muted-foreground">{client.role}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-3 w-3" /> {client.location}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-medium flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-muted-foreground" /> {client.shipments} envíos
                        </span>
                        <span className="text-xs text-muted-foreground">Frecuente en: {client.route}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityBadge(client.priority)}`}>
                        {client.priority === "VIP" && <Star className="h-3 w-3 mr-1 fill-current" />}
                        {client.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-muted rounded-md text-muted-foreground transition-colors">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
      
    </div>
  );
}