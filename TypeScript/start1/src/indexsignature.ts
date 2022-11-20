class SeatAssignment {
    // A1, A2, ...
    // Joe, John, ...
    // Index signature property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
// seats.A1 = 'Joe';
// same thing v^
seats['A1'] = 'Joe';
seats.A2 = 'John';

