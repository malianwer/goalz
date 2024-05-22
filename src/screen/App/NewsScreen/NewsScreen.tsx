import React, {FC} from 'react';
import {View, ScrollView, FlatList} from 'react-native';

import {Screen, SeeAll, Text} from '../../../components';
import styles from './styles';
import {
  StoryCard,
  TopHeadlineNewCard,
  TrendyNewsCard,
} from '../../../components/Cards';
import {
  topHeadlines,
  StoryData,
  trendyNewsData,
} from '../../../common/DummyData';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../common';

const NewsScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Buletin Story</Text>
            <SeeAll title="See All" onPress={() => {}} />
          </View>
          <FlatList
            data={StoryData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 10}}>
                  <StoryCard text={item.text} ImageUrl={item.image} />
                </View>
              );
            }}
          />
          <Text style={styles.title}>Trendy News</Text>
          <FlatList
            data={trendyNewsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 15}}>
                  <TrendyNewsCard
                    onPress={() => {
                      // @ts-ignore
                      navigation.navigate(Routes.NewsDetailScreen);
                    }}
                    text={item.text}
                    date={item.date}
                    title={item.title}
                    category={item.category}
                    readTime={item.readTime}
                    imageUrl={item.imageUrl}
                    newsChannelImg={item.newsChannelImg}
                  />
                </View>
              );
            }}
          />
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Top Headlines</Text>
            <SeeAll title="See All" onPress={() => {}} />
          </View>

          <FlatList
            data={topHeadlines}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View key={item.id}>
                  <TopHeadlineNewCard
                    title={item.text}
                    onPress={() => {
                      // @ts-ignore
                      navigation.navigate(Routes.NewsDetailScreen);
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default NewsScreen;
