import {
  ArchiveBoxIcon,
  BackspaceIcon,
  CalculatorIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  CreditCardIcon,
  FaceSmileIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import * as RaftyCorp from "@rafty/corp";
import * as Rafty from "@rafty/ui";
import Image from "next/image";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const ReactLiveScope: any = {
  React,
  Image,
  ...React,
  ...Rafty,
  ...RaftyCorp,
  useForm,
  FormProvider,
  // Icons
  ArchiveBoxIcon,
  BackspaceIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlusIcon,
  MinusIcon,
  CalendarIcon,
  FaceSmileIcon,
  CalculatorIcon,
  UserIcon,
  CreditCardIcon,
  Cog8ToothIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ChevronDownIcon,
};
