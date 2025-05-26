import { FlatList, StyleSheet, Text, View } from 'react-native';

const messages = [
  {
    name: 'Martin Randolph',
    message: "You: What's man!",
  },
  {
    name: 'Andrew Parker',
    message: 'You: Ok, thanks!',
  },
  {
    name: 'Maisy Humphrey',
    message: 'Have a good day, Jacob!',
  },
  {
    name: 'Karen Castillo',
    message: 'You: Ok, See you in To...',
  },
  {
    name: 'Joshua Lawrence',
    message: 'The business plan loo...',
  },
];

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.name[0]}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message} numberOfLines={1}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    paddingTop: 0,
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: '#222',
    marginTop: 32,
    marginBottom: 8,
    marginLeft: 24,
    letterSpacing: 0.5,
  },
  listContent: {
    paddingHorizontal: 0,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 16,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 2,
  },
  message: {
    fontSize: 15,
    color: '#8E8E93',
    lineHeight: 20,
  },
});
