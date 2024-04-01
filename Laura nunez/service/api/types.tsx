export type PostDataResources = {
    code: string;
    name: string;
    description: string;
    characteristics: any;
    owner: string;
    rating: number,
    rating_count: number,
    price: number,
    currency: string,
    state: string
}

export type createBooking = {
    tenant: string;
    user: {
        dni: string;
        name: string;
        email: string;
        cellphone: string;
        details: {
            code: string;
            value: string;
            description: string;
    }
  };
  booking: {
    status: string;
    code: string;
    details: any;
    resource_code: string;
    start_date: string;
    end_date: string
  }
}
