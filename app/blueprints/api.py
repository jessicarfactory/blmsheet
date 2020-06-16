import os

from flask import Blueprint
from flask import current_app, jsonify, request


api_blueprint = Blueprint(name='api',
                          import_name=__name__,
                          url_prefix='/api')


@api_blueprint.route('/list', methods=['GET'])
def sheet():
    db = api_blueprint.config['DB']
    db_name = os.environ['DB_NAME']

    entries = db.collection(db_name)

    if request.args.get('genre'):
        entries = entries.where('genre', 'array_contains', request.args.get('genre'))
    
    if request.args.get('location'):
        entries = entries.where('location', '==', request.args.get('location'))

    results = entries.get()
    return jsonify([result.to_dict() for result in results])


@api_blueprint.route('/locations', methods=['GET'])
def locations():
    db = api_blueprint.config['DB']
    db_name = os.environ['DB_NAME']

    entries = db.collection(db_name).get()

    locations = []

    for entry in entries:
        item = entry.to_dict()
        locations.append(item['location'].strip().title())
    
    #set() unique-ifies the list, then convert back to list so it can be jsonify'd
    return jsonify(list(set(locations)))


@api_blueprint.route('/genres', methods=['GET'])
def genres():
    db = api_blueprint.config['DB']
    db_name = os.environ['DB_NAME']

    entries = db.collection(db_name).get()

    genres = []

    for entry in entries:
        item = entry.to_dict()

        for genre in item['genre']:
            genres.append(genre.strip().title())
    
    #set() unique-ifies the list, then convert back to list so it can be jsonify'd
    return jsonify(list(set(genres)))
