
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";
import ChatBot from '../components/ChatBot';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const Reviews: React.FC = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Maria Silva",
      rating: 5,
      comment: "Excelente atendimento. A estudante Sarah foi muito atenciosa e profissional durante minha limpeza.",
      date: "15/05/2025"
    },
    {
      id: 2,
      name: "João Pereira",
      rating: 4,
      comment: "Ótimo serviço. Fiz uma restauração e o resultado ficou perfeito.",
      date: "10/05/2025"
    },
    {
      id: 3,
      name: "Ana Costa",
      rating: 5,
      comment: "Muito satisfeita com o tratamento de canal. Procedimento rápido e indolor.",
      date: "01/05/2025"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: reviews.length + 1,
      name,
      rating,
      comment,
      date: new Date().toLocaleDateString('pt-BR')
    };
    setReviews([newReview, ...reviews]);
    setName('');
    setComment('');
    setRating(5);
  };

  const RatingStars = ({ rating }: { rating: number }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-dental-cream/10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Avaliações dos Pacientes</h1>
          
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Deixe sua Avaliação</CardTitle>
                <CardDescription>Compartilhe sua experiência na Clínica Odontológica Unichristus</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Seu nome</label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Avaliação</label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="focus:outline-none"
                        >
                          <Star 
                            className={`h-6 w-6 ${
                              star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium mb-1">Comentário</label>
                    <Textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Conte-nos sobre sua experiência"
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Enviar Avaliação</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <RatingStars rating={review.rating} />
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Reviews;
