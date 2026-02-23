import { ArrowRight } from "lucide-react";
import DevelopMessage from "../components/developMessage";
import { serviceImage } from "../const/app";

export default function Service() {
    return (
        <main className="container-x flex items-center justify-center min-h-screen">
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-800 mb-3">Our Services</h2>
                        <p className="text-3xl md:text-4xl font-light text-slate-900">บริการของเรา</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-1">
                        {serviceImage.map((service, index) => (
                            <div key={index} className="group bg-white border border-slate-100  overflow-hidden hover:shadow-xl transition-all duration-500">
                                <div className="aspect-[1/1] overflow-hidden relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700"
                                    />
                                    <a href={service.href} className="absolute bottom-4 left-4
                              items-center text-xs font-medium uppercase tracking-widest
                              bg-white rounded-full  w-fit inline-flex px-4 py-2
                                group-hover:text-blue-800 transition-colors">
                                        ดูรายละเอียด <ArrowRight className="ml-2 size-3" />
                                    </a>
                                </div>
                                <div className="md:block hidden p-8">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <a href={service.href} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-800 transition-colors">
                                        ดูรายละเอียด <ArrowRight className="ml-2 size-3" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
