export function comparar(a: any, b: any) {
    if (a.resource_id < b.resource_id)
    return -1;
    // B va primero que A
    else if (a.resource_id > b.resource_id)
        return 1;
    // A y B son iguales
    else 
        return 0;
  }