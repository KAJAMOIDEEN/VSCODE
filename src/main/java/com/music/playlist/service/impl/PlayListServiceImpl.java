package com.music.playlist.service.impl;

import com.music.playlist.dto.PlayListRequest;
import com.music.playlist.model.PlayList;
import com.music.playlist.repository.PlayListRepository;
import com.music.playlist.service.PlayListService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PlayListServiceImpl implements PlayListService {
    @Autowired
    private PlayListRepository playListRepository;

    public PlayListServiceImpl(PlayListRepository playListRepository) {
        this.playListRepository = playListRepository;
    }

    @Override
    public PlayList createPlayList(PlayListRequest playListRequest) {
        return playListRepository.save(PlayList);
    }

    @Override
    public List<PlayList> getPlayLists() {
        return playListRepository.findAll();
    }

    @Override
    public PlayList getPlayListByID(Long id) {
        return playListRepository.findById(id);
    }

    @Override
    public void deletePlayList(Long id) {
       playListRepository.deleteById(id);
    }
}
