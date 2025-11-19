import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Product data array
const products = [
  {
    id: 1,
    title: 'Baskets Vintage',
    price: '89,99 €',
    description: 'Description. Vintage dernier cri compronge rêveurs',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'Sneakers Sport',
    price: '129,99 €',
    description: 'Chaussures de sport confortables et stylées',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Baskets Classic',
    price: '79,99 €',
    description: 'Style classique pour un look décontracté',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    title: 'Running Pro',
    price: '149,99 €',
    description: 'Performance maximale pour les coureurs',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    title: 'Urban Style',
    price: '99,99 €',
    description: 'Design urbain et moderne pour la ville',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    title: 'Casual Comfort',
    price: '69,99 €',
    description: 'Confort absolu pour un usage quotidien',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop'
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nos Produits</Text>
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            {/* Image Container */}
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: product.image }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            {/* Title and Price Row */}
            <View style={styles.titlePriceRow}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>{product.price}</Text>
            </View>

            {/* Short Description */}
            <Text style={styles.description}>
              {product.description}
            </Text>

            {/* Buy Button */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Acheter maintenant</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    width: 320,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  titlePriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ef4444',
    marginLeft: 10,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 24,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#22c55e',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});