import prisma from "./lib/prisma";
import { createPatient, getPatient, searchPatients, updatePatientPhone, deletePatient } from "./patients";
import { createDoctor, listDoctorsBySpecialty, deleteDoctor } from "./doctors";
import { bookAppointment, getAppointmentFull, getDoctorUpcomingAppointments, setAppointmentStatus, cancelAllPatientAppointments, deleteAppointment } from "./appointments";

async function main() {
  const suffix = Date.now();
  const patient = await createPatient({ name: "Test Patient", email: `test.${suffix}@example.com`, phone: "9999999999" });
  console.log("Created patient:", patient.name, patient.id);
  console.log("Found patient:", (await getPatient(patient.id)).name);
  console.log("Updated phone:", (await updatePatientPhone(patient.id, "8888888888")).phone);
  console.log("Search results:", (await searchPatients("Test Patient")).length);

  const doctor = await createDoctor({ name: "Dr. Test", specialty: "General Medicine", email: `doctor.${suffix}@hospital.io` });
  console.log("Created doctor:", doctor.name, doctor.id);
  console.log("Specialists:", (await listDoctorsBySpecialty("General")).length);

  const appointment = await bookAppointment(patient.id, doctor.id, new Date(Date.now() + 86400000), "Initial consultation");
  console.log("Booked appointment:", appointment.id, "for", appointment.patient.name);
  const full = await getAppointmentFull(appointment.id);
  console.log("Full fetch:", full.patient.name, "with", full.doctor.name);
  console.log("Doctor schedule:", (await getDoctorUpcomingAppointments(doctor.id)).length);
  console.log("Status:", (await setAppointmentStatus(appointment.id, "completed")).status);
  console.log("Cancelled scheduled appointments:", await cancelAllPatientAppointments(patient.id));

  await deleteAppointment(appointment.id);
  await deletePatient(patient.id);
  await deleteDoctor(doctor.id);
  console.log("Test data cleaned up.");
}

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
