"use client";

import { useEffect } from "react";
import { initBooking } from "@/lib/booking";

/** Starts the booking form on the standalone /book page. */
export default function BookingInteractions() {
  useEffect(() => {
    initBooking();
  }, []);
  return null;
}
